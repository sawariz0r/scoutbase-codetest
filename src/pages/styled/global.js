import styled from "styled-components";
import { Link as ReachLink } from "@reach/router";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 50px 20px;
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
`;

export const BackLink = styled(ReachLink)`
  position: absolute;
  top: 10px;
  left: 20px;
  color: #3DA5D9;
  font-size: 2rem;
`;

export const SmallLink = styled(ReachLink)`
  color: #3DA5D9;
  text-decoration: none;

`;

export const MainHeader = styled.h1`
  position: absolute;
  margin: 0;
  top: 5px;
  left: ${props => props.noLeftMargin ? "20px" : "60px"};
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