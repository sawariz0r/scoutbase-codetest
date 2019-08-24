import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { CONTINENTS_QUERY } from "./../queries";

import {
  Link,
  Loading,
  Wrapper,
  MainHeader
} from "./styled/global";

const Home = () => {
  const { loading, data } = useQuery(CONTINENTS_QUERY());
  return (
    <Wrapper>
      <MainHeader noLeftMargin="true">View countries by list or by continent</MainHeader>
      {loading ? null : <Link to="/countries">List of countries</Link>}
      {loading ? <Loading>Loading..</Loading> : (
        data.continents.map(cont => {
          return <Link key={cont.code} to={"/" + cont.code} >{cont.name}</Link>
        })
      )}
    </Wrapper>
  )
}

export default Home
