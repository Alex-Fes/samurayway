import React from "react";
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form/lib/Field";
import {Field} from "redux-form";


export const FormControl = ({input, meta: {touched, error}, ...props}: any) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>{props.children}</div>
            {hasError && <span>{error}</span>}
        </div>

    )
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...resProps} = props;
    return <FormControl {...props}><textarea {...input} {...resProps} /></FormControl>
}

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...resProps} = props;
    return <FormControl {...props}><input {...input} {...resProps} /></FormControl>
}

export const createField = (placeholder: string, name: string, component: any, validators: any, props?: any, text?: string) => (
    <div><Field placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
    />{text}</div>)