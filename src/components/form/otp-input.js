import React from 'react'
import { useField, useFormikContext } from 'formik'
import { InputGroup, Label } from './style/form-style'
import { colors } from 'src/styles/constants'
import OtpInput from "react-otp-input"

const OtpField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props)
  return (
    <InputGroup {...props} className="otp-group">
      <Label htmlFor={props?.id || props?.name}>
        {label}
        {props?.require === "require" ? <span style={{ color: colors.primary }}> *</span> : ""}
      </Label>
      <OtpInput
        className={`${meta.touched && meta.error ? 'error' : ''} input-otp-field`}
        error={meta.touched && meta.error ? true : false}
        id={`${props?.id || props?.name}`}
        {...field}
        {...props}
        onChange={(e) => {
          setFieldValue(field.name, e)
        }}
        inputStyle={'otp-input'}
        containerStyle={'otp-container'}
        shouldAutoFocus={true}
      />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </InputGroup>
  )
}

export default OtpField
