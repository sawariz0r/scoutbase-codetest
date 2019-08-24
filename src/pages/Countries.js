import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRIES_QUERY } from "./../queries";
import { Link } from "@reach/router";

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

export default Countries
