import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRY_QUERY } from "./../queries";
import { Link } from "@reach/router";

const Country = (props) => {
  const { loading, data } = useQuery(COUNTRY_QUERY(props.countryCode));
  if (data.country === null) {
    return (<p>error</p>)
  } else {
    return (
      <div>
        <Link to={props.continentCode ? "/" + props.continentCode : "/countries"}>Back</Link>
      <h2>Country: {loading ? null : data.country.name}</h2>
        {loading ? null : <p>{data.country.name}</p>}
      </div>
    )
  }
}

export default Country
