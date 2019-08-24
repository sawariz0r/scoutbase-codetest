import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { Router, Link } from "@reach/router";
import {
  CONTINENTS_QUERY,
  CONTINENT_QUERY,
  COUNTRIES_QUERY,
  COUNTRY_QUERY
} from "./queries";

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

const Home = () => {
  const { loading, data } = useQuery(CONTINENTS_QUERY());
  return (
    <div>
      <h2>Welcome</h2>
      {loading ? "Loading.." : null}
      <Link to="/countries">List of countries</Link>
      {loading ? null : (
        data.continents.map(cont => {
          return <Link key={cont.code} to={"/" + cont.code} >{cont.name}</Link>
        })
      )}
    </div>
  )
};

const Countries = () => {
  const { loading, data } = useQuery(COUNTRIES_QUERY());
  return (
    <div>
    <Link to="/">Back</Link>
      <h2>Countries</h2>
      {loading ? null : data.countries.map(country => <Link to={"/countries/" + country.code} key={country.code}>{country.name}</Link>)}
    </div>
  )
}

const Continent = (props) => {
  const { loading, data } = useQuery(CONTINENT_QUERY(props.continentCode));
  const countries = !loading ? data.continent.countries : null;
  return (
    <div>
      <Link to="/">Back</Link>
      <h2>Continent: {loading ? null : data.continent.name}</h2>
      {loading ? null : countries.map(country => <Link to={"/" + props.continentCode + "/" + country.code} key={country.code}>{country.name + "(" + country.code + ")"}</Link>)}
    </div>
  )
};

const Country = (props) => {
  const { loading, data } = useQuery(COUNTRY_QUERY(props.countryCode));
  if (data.country === null) {
    return (<p>error</p>)
  } else {
    return (
      <div>
        <Link to={props.continentCode ? "/" + props.continentCode : "/countries"}>Back</Link>
      <h2>Country: {loading ? null : data.country.name}</h2>
        {loading ? null : <p>{data.country.name}</p>}
      </div>
    )
  }
}

export default App;
