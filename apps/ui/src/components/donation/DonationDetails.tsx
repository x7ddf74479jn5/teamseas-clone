import { VStack, Button, Heading } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { InputField } from "../form/InputField";
import { TextareaField } from "../form/TextareaField";

const donationDetailsSchema = z.object({
  displayName: z.string().min(1, "Please enter a display name"),
  email: z
    .string()
    .email("Please enter a valid email")
    .min(1, "Please enter an email"),
  mobile: z.string().nullable(),
  team: z.string().nullable(),
  message: z.string().nullable(),
});

type DonationDetails = z.infer<typeof donationDetailsSchema>;

interface Props {
  next: (values: DonationDetails) => void;
  previous: () => void;
}

export const DonationDetails = ({ next, previous }: Props) => {
  const methods = useForm<DonationDetails>({
    defaultValues: {
      displayName: "",
      email: "",
      mobile: "",
      team: "",
      message: "",
    },
    resolver: zodResolver(donationDetailsSchema),
  });

  const { handleSubmit } = methods;

  const submit: SubmitHandler<DonationDetails> = (values) => {
    next(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="md">
            Details
          </Heading>
          <InputField
            label="Display Name"
            name="displayName"
            placeholder="Display Name"
          />

          <InputField label="Email Address" name="email" placeholder="Email" />

          <InputField
            label="Mobile Phone"
            name="mobile"
            placeholder="Mobile Phone"
          />

          <InputField label="Team" name="team" placeholder="Team name" />

          <TextareaField
            label="Message"
            name="message"
            placeholder="My #TeamSeas message is..."
          />

          <hr />

          <VStack spacing={2}>
            <Button
              width="full"
              colorScheme="orange"
              size="lg"
              borderRadius="full"
              type="submit"
            >
              Submit
            </Button>
            <Button
              width="full"
              size="lg"
              borderRadius="full"
              variant="ghost"
              fontSize="sm"
              color="gray.700"
              onClick={previous}
            >
              Previous
            </Button>
          </VStack>
        </VStack>
      </form>
    </FormProvider>
  );
};
