import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
