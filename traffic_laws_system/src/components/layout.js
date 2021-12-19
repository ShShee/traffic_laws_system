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

import configData from "../../config.json"
import "./layout.css"

export const ViewModesEnum = Object.freeze({ ViewImage: 1, ViewPDF: 2 })

const Layout = ({ children, allowAutoMargin, setChangeView, changeToDoc }) => {
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
          changeToDoc={changeToDoc}
          setChangeView={setChangeView}
        />
      </div>
      <div class={allowAutoMargin ? "autoMargin" : null}>
        <main>{children}</main>
        <footer
          style={
            allowAutoMargin
              ? { padding: `2rem 0 2rem 0` }
              : { padding: `2rem 3rem 2rem 3rem` }
          }
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
