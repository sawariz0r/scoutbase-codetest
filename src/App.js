import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

const Client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

// Clean paths up
function App() {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Home path="/" />
        <Countries path="/countries/" />
        <Country path="/countries/:countryCode" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
