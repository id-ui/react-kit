import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import {findIndex,
  findLastIndex, isUndefined} from 'lodash';
import Popover from '@idui/react-popover';
import { TextInput } from 'components/Inputs';
import Menu from './components/Menu';

export const getNextIndex = (currentIndex, direction, options) => {
  const newIndex = currentIndex + direction;

  if (!options.length) {
    return -1;
  }

  if (options[newIndex] && !options[newIndex].disabled) {
    return newIndex;
  }

  let result = -1;
  if (direction > 0) {
    for (let i = currentIndex + 1; i < options.length; i++) {
      if (!options[i].disabled) {
        result = i;
        break;
      }
    }

    return result >= 0
      ? result
      : findIndex(options, (option) => !option.disabled);
  } else {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (!options[i].disabled) {
        result = i;
        break;
      }
    }

    return result >= 0
      ? result
      : findLastIndex(options, (option) => !option.disabled);
  }
};

function Select({
  options,
  value,
  onChange,
  renderOption,
  isOptionSelected,
  menuBottomAddon,
  menuTopAddon,
  onKeyDown,
  ...inputProps
}) {
  const [inputValue, setInputValue] = useState(value);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const inputRef = useRef();

  const handleMenuOpenStateChange = useCallback((shouldOpen) => {
    setMenuOpen(shouldOpen);
    if (shouldOpen) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const menuEl = useRef(null);

  useEffect(() => {
    setActiveOptionIndex(options.length ? 0 : -1);
  }, [options]);

  const updateActiveOptionIndex = useCallback(
    (direction) => () => {
      if (!options.length) {
        return;
      }
      const lastOptionIndex = options.length - 1;
      const index = getNextIndex(activeOptionIndex, direction, options);
      if (index === activeOptionIndex) {
        return;
      }
      setActiveOptionIndex(index);
      if (menuEl.current) {
        if (index === 0) {
          menuEl.current.scrollTo(0, 0);
        } else if (index === lastOptionIndex) {
          menuEl.current.scrollTo(0, menuEl.current.scrollHeight);
        } else {
          const menuHeight = menuEl.current.clientHeight;
          const currentMenuTop = menuEl.current.scrollTop;
          const optionNodes = menuEl.current.querySelectorAll(
            '[role="option"]'
          );
          const currentOption = optionNodes[index];

          const isOptionVisible =
            currentOption.offsetTop > currentMenuTop &&
            currentOption.offsetTop + currentOption.clientHeight <
              currentMenuTop + menuHeight;
          if (!isOptionVisible) {
            if (direction === -1 || currentOption.offsetTop < currentMenuTop) {
              menuEl.current.scrollTo(0, currentOption.offsetTop);
            } else {
              menuEl.current.scrollTo(
                0,
                currentMenuTop +
                  (currentOption.offsetTop +
                    currentOption.clientHeight -
                    menuHeight -
                    currentMenuTop)
              );
            }
          }
        }
      }
    },
    [options, activeOptionIndex]
  );

  const goToPreviousOption = useMemo(() => updateActiveOptionIndex(-1), [
    updateActiveOptionIndex,
  ]);
  const goToNextOption = useMemo(() => updateActiveOptionIndex(1), [
    updateActiveOptionIndex,
  ]);

  const onSelect = useCallback(
    (index) => async () => {
      if (!options.length) {
        return;
      }
      const actualIndex = isUndefined(index) ? activeOptionIndex : index;
      if (actualIndex > -1) {
        let option = options[index];

        onChange(option);
      }
    },
    [options, activeOptionIndex, onChange]
  );

  const handleKeyDown = useCallback(
    (e) => {
      const { keyCode } = e;
      if ([13, 38, 40].includes(keyCode)) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }
      switch (keyCode) {
        // Enter
        case 13:
          onSelect()();
          break;
        // Arrow Left
        case 38:
          goToPreviousOption();
          break;
        // Arrow Right
        case 40:
          goToNextOption();
          break;
        default:
          break;
      }
      onKeyDown(e);
    },
    [goToNextOption, goToPreviousOption, onKeyDown, onSelect]
  );

  const handleSelect = useCallback(
    (index) => {
      setActiveOptionIndex(index);
      onSelect(index)();
    },
    [onSelect]
  );

  return (
    <Popover
      isOpen={isMenuOpen}
      onChangeOpen={handleMenuOpenStateChange}
      placement="bottom"
      withArrow={false}
      trigger="click"
      guessBetterPosition
      closeOnEnter
      closeOnEscape
      lazy={false}
      useTriggerWidth
      content={({ close }) => (
        <Menu
          options={options}
          isOptionSelected={isOptionSelected}
          value={value}
          close={close}
          onSelect={handleSelect}
          renderOption={renderOption}
          bottomAddon={menuBottomAddon}
          topAddon={menuTopAddon}
          activeOptionIndex={activeOptionIndex}
          ref={menuEl}
        />
      )}
    >
      <TextInput
        {...inputProps}
        key="value"
        ref={inputRef}
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={handleKeyDown}
      />
    </Popover>
  );
}

Select.propTypes = {
  renderOption: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};

Select.defaultProps = {
  renderOption: option =>  option,
  isOptionSelected: (option, value) => option === value,
  onFocus: () => {},
  onKeyDown: () => {},
  options: [],
};

export default Select;
