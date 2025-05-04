import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { FormControl, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'file';
}

const FormField = <T extends FieldValues>({ control, name, label, placeholder, type = 'text' }: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </FormControl>

      </FormItem>
    )}
  />
)

export default FormField