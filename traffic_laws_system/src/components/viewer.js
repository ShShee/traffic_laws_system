import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useRef, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"

import PrismaZoom from "react-prismazoom"

import RulesContainer from "./rulesContainer"
import { ViewModesEnum } from "./layout"

import "@fontsource/oswald/300.css"
import configData from "../../config.json"
import pdfFile from "../documents/luat.pdf"
import "./viewer.css"
import { navigate } from "gatsby"

const findPart = index => {
  switch (index) {
    case 1:
      return (
        <RulesContainer
          showOrigin={false}
          title="Chương I: NHỮNG QUY ĐỊNH CHUNG"
          theme={configData.THEME_COLORS.GREEN}
        />
      )
    case 2:
      return (
        <RulesContainer
          showOrigin={false}
          title="Chương II: HÀNH VI VI PHẠM, HÌNH THỨC, MỨC XỬ PHẠT VÀ BIỆN PHÁP KHẮC PHỤC HẬU QUẢ VI PHẠM HÀNH CHÍNH TRONG LĨNH VỰC GIAO THÔNG ĐƯỜNG BỘ"
          theme={configData.THEME_COLORS.RED}
        />
      )
    case 3:
      return (
        <RulesContainer
          showOrigin={false}
          title="Chương III: HÀNH VI VI PHẠM, HÌNH THỨC, MỨC XỬ PHẠT VÀ BIỆN PHÁP KHẮC PHỤC HẬU QUẢ VI PHẠM HÀNH CHÍNH TRONG LĨNH VỰC GIAO THÔNG ĐƯỜNG SẮT"
          theme={configData.THEME_COLORS.RED}
        />
      )
    case 4:
      return (
        <RulesContainer
          showOrigin={false}
          title="Chương IV: THẨM QUYỀN, THỦ TỤC XỬ PHẠT"
          theme={configData.THEME_COLORS.YELLOW}
        />
      )
    case 5:
      return (
        <RulesContainer
          showOrigin={false}
          title="Chương V: ĐIỀU KHOẢN THI HÀNH"
          theme={configData.THEME_COLORS.GREEN}
        />
      )
  }
}

const Viewer = ({ changeToDoc, viewModesEnum }) => {
  const prismaZoom = useRef()

  //For pdf view
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scaleRate, setScaleRate] = useState(1.0)

  //For doc view
  const [numParts, setNumParts] = useState(5)
  const [partNumber, setPartNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function changePage(offset) {
    if (changeToDoc) setPartNumber(prevPartNumber => prevPartNumber + offset)
    else setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const onClickOnZoomOut = () => {
    prismaZoom.current.zoomOut(1)
  }

  const onClickOnZoomIn = () => {
    prismaZoom.current.zoomIn(1)
  }

  const defineViewMode = () => {
    switch (viewModesEnum) {
      case ViewModesEnum.ViewImage:
        return (
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
        )

      default:
        return (
          <div>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} scale={scaleRate} />
            </Document>
          </div>
        )
    }
  }

  return (
    <div id="overlay">
      <div class="buttonsHolder">
        {!changeToDoc ? (
          <div class="zoomHolder">
            <input
              class="zoomInViewer"
              type="submit"
              value=""
              disabled={scaleRate == 3.5}
              onClick={() => setScaleRate(scaleRate => scaleRate + 0.5)}
            />
            <input
              class="zoomOutViewer"
              type="submit"
              value=""
              disabled={scaleRate == 1.0}
              onClick={() => setScaleRate(scaleRate => scaleRate - 0.5)}
            />
          </div>
        ) : null}
        <input
          class="backwardViewer"
          type="submit"
          value=""
          disabled={
            (pageNumber == 1 && !changeToDoc) ||
            (changeToDoc && partNumber == 1)
          }
          onClick={() => changePage(-1)}
        />
        <div class="viewerInfo">
          {changeToDoc
            ? partNumber + "/" + numParts
            : pageNumber + "/" + numPages}
        </div>
        <input
          class="forwardViewer"
          type="submit"
          value=""
          disabled={
            (pageNumber == numPages && !changeToDoc) ||
            (changeToDoc && partNumber == numParts)
          }
          onClick={() => changePage(1)}
        />
        <input
          class="closeViewer"
          type="submit"
          value=""
          onClick={() => navigate("/")}
        />
      </div>
      <section className="App-wrapper">
        {!changeToDoc ? (
          defineViewMode()
        ) : (
          <div class="viewHolder">{findPart(partNumber)}</div>
        )}
      </section>
    </div>
  )
}

export default Viewer
