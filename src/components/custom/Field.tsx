import React from 'react';
import { composeRenderProps,FieldError as RACFieldError, FieldErrorProps, Group, GroupProps, Input as RACInput, InputProps, Label as RACLabel, LabelProps, Text, TextProps } from "react-aria-components";
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { composeTailwindRenderProps, focusRing } from "./utils";

export function Label(props: LabelProps) {
  return <RACLabel {...props} className={twMerge('text-sm text-gray-500 font-medium cursor-default w-fit', props.className)} />;
}

export function Description(props: TextProps) {
  return <Text {...props} slot="description" className={twMerge('text-sm text-gray-600', props.className)} />;
}

export function FieldError(props: FieldErrorProps) {
  return <RACFieldError {...props} className={composeTailwindRenderProps(props.className, 'text-sm text-red-600 forced-colors:text-[Mark]')} />
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: 'border-gray-300 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 forced-colors:border-[Mark]'
    },
    isDisabled: {
      true: 'border-gray-200 forced-colors:border-[GrayText]'
    }
  }
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: 'group flex items-center h-9 bg-white forced-colors:bg-[Field] border-2 overflow-hidden',
  variants: fieldBorderStyles.variants
});

export function FieldGroup(props: GroupProps) {
  return <Group {...props} className={composeRenderProps(props.className, (className, renderProps) => fieldGroupStyles({...renderProps, className}))} />;
}

export function Input(props: InputProps) {
  return <RACInput {...props} className={composeTailwindRenderProps(props.className, 'px-2 py-1.5 flex-1 min-w-0 outline outline-0 bg-white text-sm text-gray-800 disabled:text-gray-200')} />
}