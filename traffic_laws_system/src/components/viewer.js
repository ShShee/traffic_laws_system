import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useRef } from "react"
import PrismaZoom from "react-prismazoom"
import "@fontsource/oswald/300.css"
import "./viewer.css"

const Viewer = ({ hideViewer }) => {
  const prismaZoom = useRef()

  const onClickOnZoomOut = () => {
    prismaZoom.current.zoomOut(1)
  }

  const onClickOnZoomIn = () => {
    prismaZoom.current.zoomIn(1)
  }

  return (
    <div id="overlay">
      <div class="buttonsHolder">
        <input
          class="zoomInViewer"
          type="submit"
          value=""
          onClick={onClickOnZoomIn}
        />
        <input
          class="zoomOutViewer"
          type="submit"
          value=""
          onClick={onClickOnZoomOut}
        />
        <input
          class="closeViewer"
          type="submit"
          value=""
          onClick={hideViewer}
        />
      </div>
      <section className="App-wrapper">
        <PrismaZoom className="App-zoom" maxZoom={3} ref={prismaZoom}>
          <div class="imageHolder">
            <StaticImage
              src="../images/document.jpg"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
            />
          </div>
        </PrismaZoom>
      </section>
    </div>
  )
}

export default Viewer
