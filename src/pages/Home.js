import React from 'react';
import ReactMarkdown from "react-markdown";

import {
  Code,
  Link,
  Wrapper,
  MainHeader
} from "./styled/global";


const Home = () => {
  return (
    <Wrapper>
      <MainHeader noLeftMargin="true">Code challenge: Country list</MainHeader>
      <Link to="/countries">View list of countries</Link>

      <Code>
        <h1 id="front-end-task-of-code-challenge-for-scoutbase">Front-end task of Code Challenge for Scoutbase</h1>
        <p>This task is for demonstrating your understanding of HTML, CSS, Javascript, React &amp; related libraries.</p>
        <p>If you’re doing the front-end only, you must use the <a href="https://countries.trevorblades.com">https://countries.trevorblades.com</a> endpoint for GraphQL API.</p>
        <p>Preferred libraries:</p>
        <ol>
          <li><code>styled-components</code> for styling</li>
          <li><code>apollo-client</code> for consuming GraphQL API</li>
          <li><code>react-router</code> or any alternative to implement routing</li>
        </ol>
        <p>Instructions:</p>
        <ol>
          <li>Create a <code>create-react-app</code> repo.</li>
          <li>Add a router with routes:<ul>
            <li><code>/</code> - for displaying basic links for the other routes</li>
            <li><code>/countries</code> - for requesting GraphQL API and rendering the list</li>
            <li><code>/countries/(:code)</code> - for requesting GraphQL API and rendering the properties of a continent</li>
          </ul>
          </li>
          <li>Design is totally by you.</li>
          <li>Countries list at <code>/countries</code> must contain the list of countries and the languages spoken in that country. Both in English and native languages. It should also contain the continent it is located in.</li>
          <li><code>/countries/(:code)</code> must render the currency and a area code (phone) of that country.</li>
          <li>Routes must be fully loadable with a direct link. <code>/countries/CI</code> must render the page for Ivory Coast, for example.</li>
          <li>End.</li>
        </ol>
      </Code>
    </Wrapper>
  )
}

export default Home
