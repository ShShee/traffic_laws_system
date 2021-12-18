import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/oswald/300.css"
import "./infoCard.css"

const InfoCard = ({ title, onClick }) => {
  return (
    <div class="containerInfoCard" onClick={onClick}>
      <StaticImage
        src="../images/document.jpg"
        width={600}
        height={300}
        quality={100}
        alt="Image of Laws Document"
        imgStyle={{ objectFit: `none` }}
        style={{ marginBottom: `1.45rem` }}
      />
      <h1 class="titleInfoCard">{title}</h1>
      <p class="textInfoCard">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p class="dateInfoCard">Lượt xem: 100 - 1/11/2021</p>
    </div>
  )
}

export default InfoCard
