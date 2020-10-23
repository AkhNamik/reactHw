import React from "react"
import "../css/components/MainForm.css"
import FormStatistics from "./FormStatistics"
function MainForm() {
  return (
    <div className="mainBox">
      <h2>Johny Dou Profile</h2>
      <div className="cnvs"></div>
      <div className="mainBoxImg">
        <img src={require("../images/252.png")} />
      </div>
      <FormStatistics />
    </div>
  )
}
export default MainForm
