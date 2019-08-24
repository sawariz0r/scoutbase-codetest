import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { CONTINENT_QUERY } from "./../queries";
import { Link } from "@reach/router";

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
}

export default Continent
