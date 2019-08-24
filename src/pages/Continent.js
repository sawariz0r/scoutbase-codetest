import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { CONTINENT_QUERY } from "./../queries";
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

const Continent = (props) => {
  const { loading, data } = useQuery(CONTINENT_QUERY(props.continentCode));
  const countries = !loading ? data.continent.countries : null;
  return (
    <Wrapper>
      <Link to="/">Back</Link>
      <h2>Continent: {loading ? null : data.continent.name}</h2>
      {loading ? null : countries.map(country => <Link to={"/" + props.continentCode + "/" + country.code} key={country.code}>{country.name + "(" + country.code + ")"}</Link>)}
    </Wrapper>
  )
}

export default Continent
