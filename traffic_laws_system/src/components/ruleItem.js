import * as React from "react"
import "@fontsource/oswald/300.css"
import "./ruleItem.css"
import { Link } from "gatsby"

const RuleItem = ({ willShowOrigin }) => (
  <div class="ruleItem">
    <div class="ruleContentHolder">
      <h1 class="ruleLine">Điều n khoản m : </h1>
      <p class="ruleContent">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus.
      </p>
    </div>
    {willShowOrigin ? (
      <div class="ruleOriginHolder">
        <Link class="ruleOrigin">Theo tài liệu luật giao thông X</Link>
      </div>
    ) : null}
  </div>
)

export default RuleItem
