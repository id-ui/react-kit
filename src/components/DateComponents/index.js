import styled from 'styled-components';
import {
  Calendar as IDUICalendar,
  DatePicker as IDUIDatePicker,
  DateInput as IDUIDateInput,
  TimePicker as IDUITimePicker,
  TimeInput as IDUITimeInput,
  DateRangePicker as IDUIDateRangePicker,
  DateRangeInput as IDUIDateRangeInput,
} from '@idui/react-date-components';
import { getDateComponentColors } from 'utils/componentColorsGetters';

export const Calendar = styled(IDUICalendar).attrs(({ theme }) => ({
  colors: getDateComponentColors(theme),
}))``;

Calendar.defaultProps = IDUICalendar.defaultProps;
Calendar.propTypes = IDUICalendar.propTypes;

export const DatePicker = styled(IDUIDatePicker).attrs(({ theme }) => ({
  colors: getDateComponentColors(theme),
}))``;

DatePicker.defaultProps = IDUIDatePicker.defaultProps;
DatePicker.propTypes = IDUIDatePicker.propTypes;

export const DateInput = styled(IDUIDateInput).attrs(({ theme }) => ({
  colors: getDateComponentColors(theme),
}))``;

DateInput.defaultProps = IDUIDateInput.defaultProps;
DateInput.propTypes = IDUIDateInput.propTypes;

export const TimePicker = styled(IDUITimePicker).attrs(({ theme }) => ({
  colors: getDateComponentColors(theme),
}))``;

TimePicker.defaultProps = IDUITimePicker.defaultProps;
TimePicker.propTypes = IDUITimePicker.propTypes;

export const TimeInput = styled(IDUITimeInput).attrs(({ theme }) => ({
  colors: getDateComponentColors(theme),
}))``;

TimeInput.defaultProps = IDUITimeInput.defaultProps;
TimeInput.propTypes = IDUITimeInput.propTypes;

export const DateRangePicker = styled(IDUIDateRangePicker).attrs(
  ({ theme }) => ({
    colors: getDateComponentColors(theme),
  })
)``;

DateRangePicker.defaultProps = IDUIDateRangePicker.defaultProps;
DateRangePicker.propTypes = IDUIDateRangePicker.propTypes;

export const DateRangeInput = styled(IDUIDateRangeInput).attrs(({ theme }) => ({
  colors: getDateComponentColors(theme),
}))``;

DateRangeInput.defaultProps = IDUIDateRangeInput.defaultProps;
DateRangeInput.propTypes = IDUIDateRangeInput.propTypes;
