import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRY_QUERY } from "./../queries";
import { IoIosArrowDropleft } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import styled from "styled-components";

import {
  SmallLink,
  BackLink,
  Error,
  Link,
  Wrapper,
  MainHeader,
  Loading
} from "./styled/global";

const Text = styled.span`
  
`;

const Country = (props) => {
  const { loading, data } = useQuery(COUNTRY_QUERY(props.countryCode));

  if (data.country === null) return <Wrapper><Error>Error occured!</Error></Wrapper>
  if (loading) return <Wrapper><Loading>Loading..</Loading></Wrapper>
  const country = data.country;

  return (
    <Wrapper>
      <BackLink to="/countries"><IoIosArrowDropleft /></BackLink>
      <MainHeader>{country.name}</MainHeader>
      <ReactCountryFlag code={props.countryCode} svg styleProps={{
                width: '200px',
                height: '200px',
                marginRight: '5px',
                marginBottom: '4px'
              }} />
    
    <Text>Name: {country.name}</Text>
    <Text>Native name: {country.native}</Text>
    <Text>Phone code: +{country.phone}</Text>
    <Text>Currency: {country.currency}</Text>
    <Text>Languages: {country.languages.map(x => x.name + "(" + x.native + ") ")}</Text>
    <Text>Continent: {country.continent.name}</Text>
    <Text></Text>
      
    </Wrapper>
  )
}

export default Country
