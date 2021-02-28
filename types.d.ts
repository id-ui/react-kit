import * as React from 'react';
import {AvatarProps} from "@idui/react-avatar";
import {BadgeProps} from "@idui/react-badge";
import {CheckboxProps, RadioProps, SwitchProps} from "@idui/react-toggle-controls";
import {TreeProps, CheckboxTreeProps} from "@idui/react-tree";
import {IconProps} from '@idui/react-icon'
import {SheetProps} from "@idui/react-sheet";
import {SnackbarProps, SnackbarGroupProps} from "@idui/react-snackbar";
import {StepperProps} from "@idui/react-stepper";
import {TextAreaProps} from "@idui/react-text-area";
import {TooltipProps, PopoverProps} from "@idui/react-popover";
import {TreeSelectProps} from "@idui/react-tree-select";
import {
    CalendarProps,
    TimePickerProps,
    DateRangePickerProps,
    TimeInputProps,
    DateRangeInputProps,
    DatePickerProps,
    DateInputProps
} from "@idui/react-date-components";
import {TextInputProps, NumberInputProps, SearchInputProps, TagInputProps} from "@idui/react-inputs";
import {PaginationProps} from "@idui/react-pagination";
import {LinearProgressProps, CircularProgressProps} from "@idui/react-progress";
import {ModalProps} from "@idui/react-modal";
import {FileInputProps} from "@idui/react-file-input";

type VoidFunction = (...args: any[]) => void;

export class Avatar extends React.Component<AvatarProps> {
}

export interface AlertProps {
    variant?: 'error' | 'success' | 'warning' | 'info';
    children?: React.ReactChildren;
    isCloseable?: boolean;
    onClose?: VoidFunction;
    className?: string;
}

export class Alert extends React.Component<AlertProps> {
}

export class Badge extends React.Component<BadgeProps> {
}

export interface BreadcrumbsItemConfig {
    to?: string;
    name?: string;
    href?: string;
}

export interface BreadcrumbsProps {
    items?: BreadcrumbsItemConfig[];
    divider?: string;
    className?: string;
}

export class Breadcrumbs extends React.Component<BreadcrumbsProps> {
}

export interface ButtonProps {
    type?: string;
    className?: string;
    small?: boolean;
    outline?: boolean;
    color?: string;
    children?: React.ReactChildren;
}

export class Button extends React.Component<ButtonProps> {
}

export class Checkbox extends React.Component<CheckboxProps> {
}

export class CheckboxTree extends React.Component<CheckboxTreeProps> {
}

export interface ChipProps {
    color?: string;
    children?: React.ReactChildren;
    isRemovable?: boolean;
    onRemove?: VoidFunction;
    isInteractive?: boolean;
    className?: string;
}

export class Chip extends React.Component<ChipProps> {
}

export interface DropDownMenuProps extends PopoverProps {
    items?: Object[];
    renderItem?: () => React.ReactChildren;
}

export class DropDownMenu extends React.Component<DropDownMenuProps> {
}

export interface ExternalLinkProps {
    href: string;
    children?: React.ReactChildren;
}

export class ExternalLink extends React.Component<ExternalLinkProps> {
}

export class Icon extends React.Component<IconProps> {
}

export interface IconButtonProps {
    type?: string;
    name: string;
    iconColor?: string;
    color?: string;
    size?: string;
    iconSize?: string;
    className?: string;
}

export class IconButton extends React.Component<IconButtonProps> {
}

export interface ImageProps {
    src?: string;
}

export class Image extends React.Component<ImageProps> {
}

export class ImageUploader extends React.Component<FileInputProps> {
}

export class Radio extends React.Component<RadioProps> {
}

export class Sheet extends React.Component<SheetProps> {
}

export class SnackbarGroup extends React.Component<SnackbarGroupProps> {
}

export class Snackbar extends React.Component<SnackbarProps> {
}

export class Stepper extends React.Component<StepperProps> {
}

export class Switch extends React.Component<SwitchProps> {
}

export interface TabsProps {
    items?: Object[];
    className?: string;
    renderItem?: (item: Object) => React.ReactChildren;
    valueKey?: string;
    labelKey?: string;
    activeTab?: Object;
    onChangeTab?: VoidFunction;
}

export class Tabs extends React.Component<TabsProps> {
}

export class TextArea extends React.Component<TextAreaProps> {
}

export class Tooltip extends React.Component<TooltipProps> {
}

export class Tree extends React.Component<TreeProps> {
}

export class TreeSelect extends React.Component<TreeSelectProps> {
}

export class Popover extends React.Component<PopoverProps> {
}

export interface SelectProps {
    options?: any[];
    value?: any;
    onChange?: VoidFunction;
    renderOption?: (option: any) => React.ReactChildren;
    menuBottomAddon?: React.ReactChildren;
    menuTopAddon?: React.ReactChildren;
    onKeyDown: React.EventHandler<any>;
}

export class Select extends React.Component<SelectProps> {
}

export class Calendar extends React.Component<CalendarProps> {
}

export class DatePicker extends React.Component<DatePickerProps> {
}

export class DateInput extends React.Component<DateInputProps> {
}

export class TimePicker extends React.Component<TimePickerProps> {
}

export class TimeInput extends React.Component<TimeInputProps> {
}

export class DateRangePicker extends React.Component<DateRangePickerProps> {
}

export class DateRangeInput extends React.Component<DateRangeInputProps> {
}

export class TextInput extends React.Component<TextInputProps> {
}

export class NumberInput extends React.Component<NumberInputProps> {
}

export class SearchInput extends React.Component<SearchInputProps> {
}

export class TagInput extends React.Component<TagInputProps> {
}

export class OrderedPagination extends React.Component<PaginationProps> {
}

export class UnorderedPagination extends React.Component<PaginationProps> {
}

export class LinearProgress extends React.Component<LinearProgressProps> {
}

export class CircularProgress extends React.Component<CircularProgressProps> {
}

export class Modal extends React.Component<ModalProps> {
}

export {
    AvatarProps,
    BadgeProps,
    CheckboxProps,
    RadioProps,
    SwitchProps,
    TreeProps,
    CheckboxTreeProps,
    IconProps,
    SheetProps,
    SnackbarProps,
    SnackbarGroupProps,
    StepperProps,
    TextAreaProps,
    TooltipProps,
    PopoverProps,
    TreeSelectProps,
    CalendarProps,
    TimePickerProps,
    DateRangePickerProps,
    TimeInputProps,
    DateRangeInputProps,
    DatePickerProps,
    DateInputProps,
    TextInputProps,
    NumberInputProps,
    SearchInputProps,
    TagInputProps,
    PaginationProps,
    LinearProgressProps,
    CircularProgressProps,
    ModalProps
}