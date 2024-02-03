import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: JSX.Element;
};

const queryClient = new QueryClient();

export default function NetworkProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
