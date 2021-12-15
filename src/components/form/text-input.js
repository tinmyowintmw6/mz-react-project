import React from 'react'
import { useField } from 'formik'
import { InputGroup, Label } from './style/form-style'
import { TextField, InputAdornment } from '@material-ui/core'
import { colors } from 'src/styles/constants'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <InputGroup {...props}>
      <Label htmlFor={props?.id || props?.name}>
        {label}
        {props?.require === "require" ? <span style={{ color: colors.primary }}> *</span> : ""}
      </Label>
      <TextField
        InputProps={
          {
            startAdornment: (
              props?.ismobile === "mobile" ?
              <InputAdornment position="start">
                <img src="/myanmar-flag-icon.svg" alt="flag icon" /> 09
              </InputAdornment>
              :
              ''
            ),
          }
        }
        className={`input-field ${props?.inputType === "textarea" ? "textarea" : ""}`}
        error={meta.touched && meta.error ? true : false}
        id={`${props?.id || props?.name} filled-basic`}
        variant="filled"
        helperText={meta.touched && meta.error ? meta.error : ''}
        {...field}
        {...props}
      />
    </InputGroup>
  )
}

export default TextInput
