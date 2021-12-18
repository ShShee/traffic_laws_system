import * as React from "react"
import RulesItem from "./ruleItem"
import "@fontsource/oswald/300.css"
import "./rulesContainer.css"

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

const RulesContainer = ({ title, theme, showOrigin }) => {
  var rows = []
  for (var i = 0; i < getRandomArbitrary(1, 3); i++) {
    rows.push(<RulesItem willShowOrigin={showOrigin} />)
  }
  return (
    <div
      class="rulesContainer"
      style={{
        backgroundColor: theme,
      }}
    >
      <h1 class="rulesType">{title}</h1>
      <div>{rows}</div>
    </div>
  )
}

export default RulesContainer
