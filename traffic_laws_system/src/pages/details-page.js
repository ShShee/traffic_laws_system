import * as React from "react"
import { useState } from "react"
import Viewer from "../components/viewer"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DetailsPage = () => {
  const [changeToDocView, setChangeToDoc] = useState(false)

  function setChangeView() {
    setChangeToDoc(!changeToDocView)
  }

  return (
    <Layout setChangeView={setChangeView} changeToDoc={changeToDocView}>
      <Seo title="Details Page" />
      <Viewer changeToDoc={changeToDocView} />
    </Layout>
  )
}

export default DetailsPage
