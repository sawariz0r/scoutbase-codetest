import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRY_QUERY } from "./../queries";
import { IoIosArrowDropleft } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import styled from "styled-components";

import {
  SpinnerWrapper,
  StyledSpinner,
  Info,
  BackLink,
  Error,
  Wrapper,
  MainHeader,
  Loading
} from "./styled/global";

const Text = styled.span`
  align-self: flex-start;
`;

const Country = (props) => {
  const { loading, data } = useQuery(COUNTRY_QUERY(props.countryCode));

  if (data.country === null) return <Wrapper><Error>Error occured!</Error></Wrapper>
  if (loading) return (
    <SpinnerWrapper>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </StyledSpinner>
    </SpinnerWrapper>
  );
  const country = data.country;

  return (
    <Wrapper>
      <MainHeader>
        <BackLink to="/countries"><IoIosArrowDropleft /></BackLink>
        {country.name}
      </MainHeader>
      <ReactCountryFlag code={props.countryCode} svg styleProps={{
        width: '200px',
        height: '200px',
        marginRight: '5px',
        marginBottom: '4px'
      }} />

      <Info>
        <Text>Name: {country.name}</Text>
        <Text>Native name: {country.native}</Text>
        <Text>Phone code: +{country.phone}</Text>
        <Text>Currency: {country.currency}</Text>
        <Text>Languages: {country.languages.map(x => x.name + "(" + x.native + ") ")}</Text>
        <Text>Continent: {country.continent.name}</Text>
      </Info>

    </Wrapper>
  )
}

export default Country
