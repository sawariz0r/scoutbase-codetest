import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Continent from "./pages/Continent";
import Country from "./pages/Country";

const Client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

function App() {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Home path="/" />
        <Continent path="/:continentCode/" />
        <Country path="/:continentCode/:countryCode/" />
        <Countries path="/countries/" />
        <Country path="/countries/:countryCode" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
