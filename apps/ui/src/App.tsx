import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";

import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { useQuery, useSubscription } from "urql";

import { theme } from "./theme";
import { Logo } from "./components/Logo";
import { Counter } from "./components/donation/Counter";
import { Leaderboard } from "./components/leaderboard/Leaderboard";
import { DonationWizard } from "./components/donation/DonationWizard";

type TotalDonationsQueryResponse = {
  totalDonations: number;
};

const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

type TotalUpdatedQuerySubscription = {
  totalUpdated: { total: number };
};

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;

const handleSubscription = (
  _previous: number | undefined,
  newTotal: TotalUpdatedQuerySubscription,
) => {
  return newTotal?.totalUpdated?.total;
};

const App = () => {
  const [res] = useSubscription<TotalUpdatedQuerySubscription, number>(
    { query: TotalUpdatedQuery },
    handleSubscription,
  );
  const [{ data, fetching, error }] = useQuery<TotalDonationsQueryResponse>({
    query: TotalDonationsQuery,
  });

  const counterTo = res.data || data?.totalDonations;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bg="gray.50">
          <VStack spacing={8}>
            <Logo h="32" pointerEvents="none" />
            <Heading as="h1" size="xl">
              JOIN THE MOVEMENT!
            </Heading>
            <Text>
              The team is growing everyday and scoring wins for the planet.
              <br /> Remove trash with us and track our progress!
            </Text>

            {counterTo && (
              <Heading as="h2" size="4xl">
                <Counter from={0} to={counterTo} />
              </Heading>
            )}

            <DonationWizard />

            <Leaderboard />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
