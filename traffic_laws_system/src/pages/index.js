import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

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

import "./index.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HorizontalDivider openingLine="Gợi ý" />
      <RulesContainer showOrigin={true} title="Luật xử phạt" theme="#ff0000" />
      <RulesContainer showOrigin={true} title="Luật cảnh cáo" theme="#ffff00" />
      <RulesContainer showOrigin={true} title="Luật quy định" theme="#00ff00" />
      <RulesContainer showOrigin={true} title="Luật chung" theme="#3399FF" />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <InfoCard title="Tài liệu 1 - Luật giao thông A" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard title="Tài liệu 2 - Luật giao thông B" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard title="Tài liệu 3 - Luật giao thông C" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard title="Tài liệu 4 - Luật giao thông D" />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard title="Tài liệu 5 - Luật giao thông E" />
        </SwiperSlide>
      </Swiper>
      <div class="divider"></div>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
