import styled from "styled-components";
import { Link as ReachLink } from "@reach/router";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #34344A;
`;

export const CountriesWrapper = styled.div`
`;

export const Link = styled(ReachLink)`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #CC5A71;
  text-decoration: none;
  display: ${props => props.undertext ? "flex" : "block"}
  flex-direction: column;
  position: relative;

  &:hover {
    color: #80475E;
  }
`;

export const BackLink = styled(ReachLink)`
  color: #CC5A71;
  font-size: 2rem;
  margin-right: 3px;
  svg {
    margin-bottom: -4.5px;
  }
`;

export const SmallLink = styled(ReachLink)`
  color: #CC5A71;
  text-decoration: none;

`;

export const Code = styled.code`
  background: #3A445D;
  padding: 10px;
  border-radius: 5px;
  color: #CC5A71;
  a {
    color: #80475E;
  }
`;

export const Info = styled(Code)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MainHeader = styled.h1`
  display: flex;
  margin: 0;
  color: #F0F757;
`;

export const Loading = styled.p`
  color: #3A445D;
`;

export const Error = styled(MainHeader)`
  color: #EA7317;
`;

export const Undertext = styled.span`
  font-size: 0.9rem;
`;

export const ContinentName = styled.span`
  color: #C89B7B;
  opacity: 0.7;
  font-size: 0.9rem;

  &::before {
    content: '(';
  }

  &::after {
    content: ')';
  }
`;

export const SearchBar = styled.input`
  margin: 10px 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

// Spinner by knowbody@github

export const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #34344A;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  height: 100px;
  width: 100px;

  & .path {
    stroke: #F0F757;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;