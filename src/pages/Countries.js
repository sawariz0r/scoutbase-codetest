import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRIES_QUERY } from "./../queries";
import { IoIosArrowDropleft } from "react-icons/io";
import ReactCountryFlag from "react-country-flag"

import {
  Undertext,
  ContinentName,
  BackLink,
  Link,
  Wrapper,
  MainHeader
} from "./styled/global";

const langString = (arr) => {
  //TODO: Simplify further?
  if (arr.length === 0) return "No Languages";
  let result = "Languages: ";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i].name + "(" + arr[i].native + ") "
  }

  return result;
}

const Countries = (props) => {
  const { loading, data } = useQuery(COUNTRIES_QUERY());
  if (loading) return <Wrapper>Loading..</Wrapper>

  //TODO: Style this in a nice way
  return (
    <Wrapper>
      <MainHeader>
        <BackLink to="/"><IoIosArrowDropleft /></BackLink>
        Countries
      </MainHeader>
      {data.countries.map(country => {
        return <Link to={"/countries/" + country.code} key={country.code} undertext="true">
          <div>
            <ReactCountryFlag code={country.code} svg styleProps={{
              width: '20px',
              height: '20px',
              marginRight: '5px',
              marginBottom: '4px'
            }} />
            {country.name}
          </div>
          <Undertext>{langString(country.languages)}</Undertext>
          <ContinentName>Located in: {country.continent.name}</ContinentName>
        </Link>
      })}
    </Wrapper>
  )
}

export default Countries
