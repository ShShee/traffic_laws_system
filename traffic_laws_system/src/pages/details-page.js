import * as React from "react"
import { useState } from "react"
import LawsViewer from "../components/lawsviewer"

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
      <LawsViewer changeToDoc={changeToDocView} />
    </Layout>
  )
}

export default DetailsPage
