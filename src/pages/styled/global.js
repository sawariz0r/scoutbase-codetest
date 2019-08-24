import styled from "styled-components";
import { Link as ReachLink } from "@reach/router";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F3F3F3;
`;

export const Link = styled(ReachLink)`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #3DA5D9;
  text-decoration: none;
  display: ${props => props.undertext ? "flex" : "block"}
  flex-direction: column;
  position: relative;

  &:hover {
    color: #225A77;
  }
`;

export const BackLink = styled(ReachLink)`
  color: #3DA5D9;
  font-size: 2rem;
  margin-right: 3px;
  svg {
    margin-bottom: -4.5px;
  }
`;

export const SmallLink = styled(ReachLink)`
  color: #3DA5D9;
  text-decoration: none;

`;

export const Code = styled.code`
  background: #0E1428;
  padding: 10px;
  border-radius: 5px;
  color: #FEC601;
`;

export const Info = styled(Code)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MainHeader = styled.h1`
  display: flex;
  margin: 0;
  color: #2364AA;
`;

export const Loading = styled.p`
  color: #2364AA;
`;

export const Error = styled(MainHeader)`
  color: #EA7317;
`;

export const Undertext = styled.span`
  font-size: 0.9rem;
`;

export const ContinentName = styled.span`
  color: #73BFB8;
  opacity: 0.7;
  font-size: 0.9rem;

  &::before {
    content: '(';
  }

  &::after {
    content: ')';
  }
`;