import React from 'react';


export const required = (value: string) => value ? undefined : 'Field is required';

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

