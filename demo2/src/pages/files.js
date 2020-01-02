import React from "react";
import { Layout } from '../components';
import { graphql } from 'gatsby';


export default ({ data }) => {
  console.log(data);
  return (
  <Layout>
    <h1>Project Files</h1>
    { data.allFile.edges.map(({node}, i) => (
      <p key={i}>Filename { node.name } / extension: { node.extension }</p>
    ))}
  </Layout>
)};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          name
          extension
          size
        }
      }
    }
  }
`;