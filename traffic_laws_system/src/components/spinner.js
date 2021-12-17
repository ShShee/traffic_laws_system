import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/oswald/300.css"
import "./spinner.css"
import SelectCustom from "./selectCustom"

const data = [
  {
    title: "Lựa chọn 1",
  },
  {
    title: "Lựa chọn 2",
  },
  {
    title: "Lựa chọn 3",
  },
  {
    title: "Lựa chọn 4",
  },
]

const Spinner = ({ title }) => {
  return (
    <div class="containerSpinner">
      <h1 class="titleSpinner">{title}</h1>
      <SelectCustom data={data} placeholder="Chọn lựa chọn" />
    </div>
  )
}

export default Spinner
