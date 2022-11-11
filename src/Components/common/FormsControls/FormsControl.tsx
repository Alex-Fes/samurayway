import React from "react";
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form/lib/Field";


export const FormControl = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
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