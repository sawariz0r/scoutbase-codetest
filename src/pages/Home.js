import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { CONTINENTS_QUERY } from "./../queries";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import {
  Link,
  Loading,
  Wrapper,
  MainHeader
} from "./styled/global";

const Code = styled.code`
  background: #0E1428;
  padding: 10px;
  border-radius: 5px;
  color: #FEC601;
`;

const Home = () => {
  const { loading, data } = useQuery(CONTINENTS_QUERY());
  if (loading) return <Loading>Loading..</Loading>;
  return (
    <Wrapper>
      <MainHeader noLeftMargin="true">View countries by list or by continent</MainHeader>
      <Link to="/countries">List of countries</Link>
      
      <Code><ReactMarkdown source="
      # Front-end task of Code Challenge for Scoutbase

      This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.
      
      If you’re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API.
      
      ## Preferred libraries:
      
        - `styled-components` for styling
        - `apollo-client` for consuming GraphQL API
        - `react-router` or any alternative to implement routing
      
      ## Instructions:
      
      1. Create a `create-react-app` repo.
      2. Add a router with routes:
        - `/` - for displaying basic links for the other routes
        - `/countries` - for requesting GraphQL API and rendering the list
        - `/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent
      3. Design is totally by you.
      4. Countries list at `/countries` must contain the list of countries and the languages spoken in that country. Both in English and native languages. It should also contain the continent it is located in.
      5. `/countries/(:code)` must render the currency and a area code (phone) of that country.
      6. Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example.
      7. End.
      
      " /></Code>
    </Wrapper>
  )
}

export default Home
