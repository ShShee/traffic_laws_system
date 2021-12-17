import React, { Component } from "react"
import "@fontsource/oswald/300.css"
import "./selectCustom.css"

class SelectCustom extends Component {
  state = {
    defaultType: "",
    defaultTitle: "",
    isOpen: false,
  }

  handleSelect = title => {
    if (!this.state.isOpen) {
      document.addEventListener("click", this.handleOutsideClick, false)
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      defaultTitle: title,
    }))
  }

  handleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleOutsideClick = () => {
    this.handleSelect()
  }

  render() {
    const { data, placeholder } = this.props
    const { defaultType, defaultTitle } = this.state

    return (
      <div className="option-custom">
        <div className="select-input" onClick={this.handleOpen}>
          <span
            className={`${
              placeholder && defaultTitle === ""
                ? "select-title placeholder"
                : "select-title"
            }`}
          >
            {defaultTitle === "" ? placeholder : defaultTitle}
          </span>
        </div>

        {this.state.isOpen ? (
          <div className="select-list">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => this.handleSelect(data[index].title)}
                className="select-item"
              >
                <span className="select-title">{item.title}</span>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default SelectCustom
