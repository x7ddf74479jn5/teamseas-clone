import {
  createClient,
  Provider,
  subscriptionExchange,
  defaultExchanges,
} from "urql";

import { wsClient } from "./ws";

const client = createClient({
  url: "http://localhost:3001/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink: any) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

export const URQLProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider value={client}>{children}</Provider>
);
