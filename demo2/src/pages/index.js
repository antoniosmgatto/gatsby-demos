import React from "react";
import { Layout } from '../components';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

console.log(rhythm(0.25));

export default ({ data }) => (
  <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>

    <div>
      <h4>Blog posts</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}
              css={css`
                text-decoration: none,
                color: inherit
              `}
            >
              <h3
                css={css`margin-bottom: ${rhythm(0.25)}`}
              >
                { node.frontmatter.title}{' '}
                <span
                  css={css`
                    color: #bbb
                  `}
                >
                  - { node.frontmatter.date }
                </span>
                </h3>
              <p>{ node.excerpt }</p>
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;