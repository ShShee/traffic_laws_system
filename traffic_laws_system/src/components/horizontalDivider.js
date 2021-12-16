import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/oswald/300.css"
import "./divider.css"

const HorizontalDivider = ({ openingLine }) => (
  <div class="horizontal_container">
    <h1 class="horizontal_text">{openingLine}</h1>

    <div class="horizontal_divider" />
  </div>
)

export default HorizontalDivider
