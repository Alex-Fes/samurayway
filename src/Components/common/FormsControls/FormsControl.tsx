import React from "react";
import styles from './FormControls.module.css'


export const FormControl = ({input , meta , child, ...props }: any) => {
    const hasError = meta.touched && meta.error;
    debugger
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>  }
        </div>

    )
}

export const Textarea  = (props : any)  => {
  const {input , meta , child, ...resProps } = props;
  return <FormControl {...props}><textarea {...input} {...resProps} /></FormControl>
}

export const Input  = (props: any)  => {
    const {input , meta , child, ...resProps } = props;
    return <FormControl {...props}><input {...input} {...resProps} /></FormControl>
}