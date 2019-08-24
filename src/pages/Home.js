import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { CONTINENTS_QUERY } from "./../queries";
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

const Home = () => {
  const { loading, data } = useQuery(CONTINENTS_QUERY());
  return (
    <Wrapper>
      <h2>View countries by list or by continent</h2>
      {loading ? "Loading.." : null}
      <Link to="/countries">List of countries</Link>
      {loading ? null : (
        data.continents.map(cont => {
          return <Link className="link" key={cont.code} to={"/" + cont.code} >{cont.name}</Link>
        })
      )}
    </Wrapper>
  )
}

export default Home
