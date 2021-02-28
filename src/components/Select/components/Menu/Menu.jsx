import React, { useCallback } from 'react';
import { Option, Container } from './styled';

function Menu(
  {
    onSelect,
    close,
    options,
    renderOption,
    value,
    isOptionSelected,
    bottomAddon,
    topAddon,
    activeOptionIndex,
  },
  ref
) {
  const handleChange = useCallback(
    (index) => {
      onSelect(index);
      close();
    },
    [close, onSelect]
  );

  return (
    <Container ref={ref} role="menu">
      {topAddon}
      {options.map((option, index) => (
        <Option
          key={index}
          onClick={() => handleChange(index)}
          isSelected={isOptionSelected(option, value)}
          isActive={index === activeOptionIndex}
          role="option"
        >
          {renderOption(option)}
        </Option>
      ))}
      {bottomAddon}
    </Container>
  );
}

export default React.forwardRef(Menu);
