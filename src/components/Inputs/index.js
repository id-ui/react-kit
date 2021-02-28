import styled from 'styled-components';
import { getInputColors } from 'utils/componentColorsGetters';
import {
  TextInput as IDUITextInput,
  NumberInput as IDUINumberInput,
  SearchInput as IDUISearchInput,
  TagInput as IDUITagInput,
} from '@idui/react-inputs';

export const TextInput = styled(IDUITextInput).attrs(({ theme }) => ({
  colors: getInputColors(theme),
}))``;

TextInput.propTypes = IDUITextInput.propTypes;
TextInput.defaultProps = IDUITextInput.defaultProps;

export const NumberInput = styled(IDUINumberInput).attrs(({ theme }) => ({
  colors: getInputColors(theme),
}))``;

NumberInput.propTypes = IDUINumberInput.propTypes;
NumberInput.defaultProps = IDUINumberInput.defaultProps;

export const SearchInput = styled(IDUISearchInput).attrs(({ theme }) => ({
  colors: getInputColors(theme),
}))``;

SearchInput.propTypes = IDUISearchInput.propTypes;
SearchInput.defaultProps = IDUISearchInput.defaultProps;

export const TagInput = styled(IDUITagInput).attrs(({ theme }) => ({
  colors: getInputColors(theme),
}))``;

TagInput.propTypes = IDUITagInput.propTypes;
TagInput.defaultProps = IDUITagInput.defaultProps;
