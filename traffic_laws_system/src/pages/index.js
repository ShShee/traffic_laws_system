import * as React from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "@fontsource/oswald/300.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HorizontalDivider from "../components/horizontalDivider"
import InfoCard from "../components/infoCard"
import RulesContainer from "../components/rulesContainer"

import configData from "../../config.json"
import "./index.css"

const IndexPage = () => {
  const [changeToDocView, setChangeToDoc] = useState(false)

  function setChangeView() {
    setChangeToDoc(!changeToDocView)
  }

  function offDetailsPage() {
    setChangeToDoc(false)
    document.getElementById("switchViewButton").style = "viewImageButton"
  }

  return (
    <Layout
      setChangeView={setChangeView}
      allowAutoMargin={true}
      changeToDoc={changeToDocView}
    >
      <Seo title="Home" />
      <HorizontalDivider openingLine="Gợi ý" />
      {changeToDocView ? (
        <RulesContainer
          showOrigin={true}
          title="Các mức xử phạt vi phạm phổ biến"
          theme={configData.THEME_COLORS.RED}
        />
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide onClick={() => navigate("/details-page/")}>
            <InfoCard title="Tài liệu 1 - Luật giao thông A" />
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/details-page/")}>
            <InfoCard title="Tài liệu 2 - Luật giao thông B" />
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("/details-page/")}>
            <InfoCard title="Tài liệu 3 - Luật giao thông C" />
          </SwiperSlide>
          <SwiperSlide>
            <InfoCard title="Tài liệu 4 - Luật giao thông D" />
          </SwiperSlide>
          <SwiperSlide>
            <InfoCard title="Tài liệu 5 - Luật giao thông E" />
          </SwiperSlide>
        </Swiper>
      )}

      <div class="divider"></div>
      {false ? (
        <div>
          <p>Now go build something great.</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
          <p>
            <Link to="/details-page/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
            <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
            <Link to="/using-dsg">Go to "Using DSG"</Link>
          </p>
        </div>
      ) : null}
    </Layout>
  )
}

export default IndexPage
