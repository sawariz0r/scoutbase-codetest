import { gql } from "apollo-boost";

export const CONTINENTS_QUERY = () => {
  return gql`
  {
    continents {
      name
      code
    }
  }
  `;
};

export const CONTINENT_QUERY = (code) => {
  return gql`
  {
    continent(code: "${code.toUpperCase()}") {
      name
      countries {
        name
        code
      }
    }
  }`;
}

export const COUNTRIES_QUERY = () => {
  return gql`
  {
    countries {
      name
      code
    }
  } 
  `;
}

export const COUNTRY_QUERY = (code) => {
  return gql`
  {
    country(code: "${code.toUpperCase()}") {
      name
      code
    }
  }`;
};