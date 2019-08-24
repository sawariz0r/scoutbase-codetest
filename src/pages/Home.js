import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { CONTINENTS_QUERY } from "./../queries";
import { Link } from "@reach/router";

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
}

export default Home
