import React from 'react'
import { useField } from 'formik'
import { InputGroup, Label } from './style/form-style'
import { TextField } from '@material-ui/core'
import { colors } from 'src/styles/constants'

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <InputGroup {...props}>
      <Label htmlFor={props?.id || props?.name}>
        {label}
        {props?.require === "require" ? <span style={{ color: colors.primary }}> *</span> : ""}
      </Label>
      <TextField
        select
        className="input-field"
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

export default SelectInput
