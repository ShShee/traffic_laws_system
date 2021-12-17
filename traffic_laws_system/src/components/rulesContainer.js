import * as React from "react"
import RulesItem from "./ruleItem"
import "@fontsource/oswald/300.css"
import "./rulesContainer.css"

const RulesContainer = ({ title, theme, showOrigin }) => {
  return (
    <div
      class="rulesContainer"
      style={{
        backgroundColor: theme,
      }}
    >
      <h1 class="rulesType">{title}</h1>
      <RulesItem willShowOrigin={showOrigin} />
    </div>
  )
}

export default RulesContainer
