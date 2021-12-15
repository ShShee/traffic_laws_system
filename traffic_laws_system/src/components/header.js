import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/oswald/300.css"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3399FF`,
    }}
  >
    <div class="wrapper">
      <div class="flexContainer">
        <div class="firstCol">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: "Oswald",
              }}
            >
              <p
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                HỆ THỐNG
              </p>
              <p
                style={{
                  marginBottom: 15,
                }}
              >
                TRA CỨU PHÁP LUẬT
              </p>
            </Link>
          </h1>
        </div>

        <div class="secondCol">
          <div class="innerFlex">
            <input
              class="firstItem"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Nhập nội dung cần tìm"
            />
            <div class="secondItem"></div>
            <input class="thirdItem" type="submit" value="" />
          </div>
        </div>

        <div class="thirdCol">789</div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
