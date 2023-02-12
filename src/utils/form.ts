import { FieldValues, RegisterOptions } from 'react-hook-form'

export const requiredFieldRule: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: 'This field can not be blank',
}
