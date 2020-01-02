import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from "../utils/typography";


export default ({ children }) => {
  const data = useStaticQuery(
   graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to="/">
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <div
        css={css`
          float: right;
        `}
      >
        <Link css={css`margin-right: 1rem`} to="/about">About</Link>
        <Link to="/files">Project files</Link>
      </div>
      {children}
    </div>
  )
}