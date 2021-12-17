import * as React from "react"
import "@fontsource/oswald/300.css"
import "./advancedSearch.css"
import Spinner from "./spinner"

const AdvancedSearch = () => (
  <div class="advancedSearch">
    <ul class="searchOptions">
      <li class="flexSearchOptions">
        <Spinner title="Phân loại :" />
      </li>
      <li class="flexSearchOptions">
        <Spinner title="Mã tài liệu :" />
      </li>
      <li class="flexSearchOptions">
        <Spinner title="Hình thức :" />
      </li>
    </ul>
    <ul class="searchOptions">
      <li class="flexSearchOptions">
        <Spinner title="Thời gian ban hành :" class="searchBoxes" />
      </li>
      <li class="flexSearchOptions">
        <Spinner title="Điều khoản :" class="searchBoxes" />
      </li>
    </ul>
  </div>
)

export default AdvancedSearch
