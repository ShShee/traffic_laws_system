/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Viewer from "./viewer"

import configData from "../../config.json"
import "./layout.css"

const Layout = ({ children, setChangeView, hideViewer }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {" "}
      <div class="header">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          setChangeView={setChangeView}
        />
      </div>
      <Viewer hideViewer={hideViewer} />
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 3rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" target="_blank">
            Gatsby
          </a>
          {` `}
          by
          {` `}
          <a href={configData["CREATOR GIT"]} target="_blank">
            ShShee
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
