import React, { useState, useMemo } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { COUNTRIES_QUERY } from "./../queries";
import { IoIosArrowDropleft } from "react-icons/io";
import { langString } from "./../helpers";

import {
  SpinnerWrapper,
  StyledSpinner,
  CountriesWrapper,
  SearchBar,
  Undertext,
  ContinentName,
  BackLink,
  Link,
  Wrapper,
  MainHeader
} from "./styled/global";

const Countries = (props) => {
  const { loading, data, error } = useQuery(COUNTRIES_QUERY());
  const [countries, setCountries] = useState([]);
  const memoData = useMemo(() => {
    if (!loading) {
      setCountries(data.countries);
      return data.countries;
    }
  }, [data])

  if (error) return <Wrapper>Error! Check console for more information {console.log(error)}</Wrapper>
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

  const filterResults = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue !== "") {
      setCountries(data.countries.filter(country => {
        return country.name.toLowerCase().includes(searchValue)
      }))

    } else {
      setCountries(data.countries)
    }
  }

  //TODO: Style this in a nice way
  return (
    <Wrapper>
      <MainHeader>
        <BackLink to="/"><IoIosArrowDropleft /></BackLink>
        Countries
      </MainHeader>
      <SearchBar type="text" placeholder="Search.." onChange={filterResults} />
      <CountriesWrapper>
        {
          countries.map(country => {
            return <Link to={"/countries/" + country.code} key={country.code} undertext="true">
              {country.name}
              <Undertext>{langString(country.languages)}</Undertext>
              <ContinentName>Located in: {country.continent.name}</ContinentName>
            </Link>
          })
        }
      </CountriesWrapper>
    </Wrapper>
  )
}

export default Countries
