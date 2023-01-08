import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";
import { useFormState, useFormContext } from "react-hook-form";

type InputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const InputField = ({ label, placeholder, name }: InputFieldProps) => {
  const { register } = useFormContext();
  const { errors, isDirty } = useFormState();

  const hasError = Boolean(isDirty && errors);

  return (
    <FormControl isInvalid={hasError}>
      <FormLabel
        htmlFor={name}
        fontWeight="bold"
        fontSize="xs"
        textTransform="uppercase"
      >
        {label}
      </FormLabel>
      <Input id={name} placeholder={placeholder} {...register(name)} />
      {errors?.[name] && (
        <FormErrorMessage>{errors?.[name]?.message as string}</FormErrorMessage>
      )}
    </FormControl>
  );
};
