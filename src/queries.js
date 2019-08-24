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
        languages {
          name
          native
        }
        continent {
          code
          name
        }
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
      languages {
        name
        native
      }
      continent {
        code
        name
      }
    }
  } 
  `;
}

export const COUNTRY_QUERY = (code) => {
  return gql`
  {
    country(code: "${code.toUpperCase()}") {
      name
      native
      phone
      currency
      emoji
      emojiU
      languages { 
        name
        native
      }
      continent {
        code
        name
      }
    }
  }`;
};