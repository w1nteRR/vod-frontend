import { ChangeEvent, memo } from "react"
import { StandardTextFieldProps, TextField, withStyles } from "@material-ui/core"

interface IInputProps extends StandardTextFieldProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const CustomTextField = withStyles({
  root: {
    background: '#313131', //use color from theme
    borderRadius: 8,
    margin: '10px 0',
    '& label.Mui-focused': {
      color: 'gray'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      },
      '&:hover fieldset': {
        border: 'none'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue'
      },
    },
  }
})(TextField)

export const Input = memo<IInputProps>(({
  label,
  onChange,
  value,
  name,
  type
}) => {
  return (
    <CustomTextField 
      InputLabelProps={{
        style: {
          color: 'silver',
          fontSize: 12
        }
      }}
      variant='outlined' 
      label={label}
      onChange={onChange}
      fullWidth 
      value={value}
      name={name}
      type={type}
    />
  )
})