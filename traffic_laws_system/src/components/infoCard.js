import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/oswald/300.css"
import "./infoCard.css"

const InfoCard = ({ title }) => (
  <div class="container">
    <StaticImage
      src="../images/document.jpg"
      width={600}
      height={300}
      quality={100}
      alt="Image of Laws Document"
      imgStyle={{ objectFit: `none` }}
      style={{ marginBottom: `1.45rem` }}
    />
    <h1 class="title">{title}</h1>
    <p class="text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <p class="date">1/11/2021</p>
  </div>
)

export default InfoCard
