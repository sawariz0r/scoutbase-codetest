import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRIES_QUERY } from "./../queries";
import { Link } from "@reach/router";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F1EDEE;
`;

const Countries = () => {
  const { loading, data } = useQuery(COUNTRIES_QUERY());
  return (
    <Wrapper>
    <Link to="/">Back</Link>
      <h2>Countries</h2>
      {loading ? null : data.countries.map(country => <Link to={"/countries/" + country.code} key={country.code}>{country.name}</Link>)}
    </Wrapper>
  )
}

export default Countries
