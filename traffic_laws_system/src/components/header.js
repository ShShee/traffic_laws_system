import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useState } from "react"
import "@fontsource/oswald/300.css"
import "./header.css"
import configData from "../../config.json"

import AdvancedSearch from "./advancedSearch"

const Header = ({ siteTitle, setChangeView }) => {
  const [showAdvance, setShowAdvance] = React.useState(false)
  const [switchToDoc, setSwitchToDoc] = React.useState(false)

  return (
    <header
      style={{
        background: configData.THEME_COLORS.PRIMARY,
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
              <input
                class={!showAdvance ? "thirdItemMore" : "thirdItemLess"}
                type="submit"
                value=""
                onClick={() => setShowAdvance(!showAdvance)}
              />
            </div>
          </div>

          <div class="thirdCol">
            <div class="innerFlexV2">
              <input class="searchButton" type="submit" value="" />
              <input class="chatbotButton" type="submit" value="" />
              <input
                class={!switchToDoc ? "viewImageButton" : "viewDocButton"}
                type="submit"
                value=""
                onClick={() => {
                  setChangeView()
                  setSwitchToDoc(!switchToDoc)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {showAdvance ? <AdvancedSearch /> : null}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
