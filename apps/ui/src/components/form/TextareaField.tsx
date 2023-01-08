import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/react";
import { useFormState, useFormContext } from "react-hook-form";

type TextareaFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const TextareaField = ({
  label,
  placeholder,
  name,
}: TextareaFieldProps) => {
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
      <Textarea id={name} placeholder={placeholder} {...register(name)} />
      {errors?.[name] && (
        <FormErrorMessage>{errors?.[name]?.message as string}</FormErrorMessage>
      )}{" "}
    </FormControl>
  );
};
