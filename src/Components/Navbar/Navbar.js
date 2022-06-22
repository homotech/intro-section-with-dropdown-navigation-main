import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretUp,
  faX,
  faClipboardList,
  faCalendarDay,
  faBell,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import logo from "../../images/logo.svg";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showFeatures: false,
      showCompany: false,
    };
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };
  toggleCaret = () => {
    if (this.state.showCompany) {
      this.setState({
        showFeatures: !this.state.showFeatures,
        showCompany: !this.state.showCompany,
      });
    } else {
      this.setState({
        showFeatures: !this.state.showFeatures,
        showCompany: false,
      });
    }
  };

  toggleCompany = () => {
    if (this.state.showFeatures) {
      this.setState({
        showFeatures: !this.state.showFeatures,
        showCompany: !this.state.showCompany,
      });
    } else {
      this.setState({
        showFeatures: false,
        showCompany: !this.state.showCompany,
      });
    }
  };
  render() {
    const marginforcarets = "0 0 0 0.3rem";
    const Purple = "rgb(115, 107, 193)";
    const Yellow = "rgb(255, 201, 67)";
    const LightPurple = "rgb(155, 98, 188)";
    const Blue = "rgb(66, 164, 219)";
    const margin = " 0 1rem 0 0";

    let { showMenu, showFeatures, showCompany } = this.state;
    return (
      <nav style={{ display: "flex" }}>
        {/* logo area  */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* for mobile screens */}
        <label htmlFor="" className="menuicon" onClick={this.toggleMenu}>
          {!showMenu ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faX} />
          )}
        </label>
        {/* <input type="checkbox" name="menu" id="menu" /> */}

        {/* Navbar items section starts here  */}
        <div className={`${showMenu ? "showNavMenu" : "hideNavMenu"} navitems`}>
          <ul className="nav-items">
            {/* features section  */}
            <li>
              <label
                htmlFor="features"
                className="features"
                onClick={this.toggleCaret}
              >
                Features
                {/* <li>
                    <a href="">Features</a>
                  </li> */}
                {showFeatures ? (
                  <FontAwesomeIcon
                    className="caretUp"
                    style={{ margin: marginforcarets }}
                    icon={faCaretUp}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ margin: marginforcarets }}
                    className="caretUp"
                    icon={faCaretDown}
                  />
                )}
              </label>
            </li>

            {/* <input type="checkbox" name="features" id="features" /> */}
            <ul
              className="features-item"
              style={{
                display: `${this.state.showFeatures ? "block" : "none"}`,
              }}
            >
              <li>
                <FontAwesomeIcon
                  style={{ color: Purple, margin: margin }}
                  className="todolist"
                  icon={faClipboardList}
                />
                <a href="">Todo List</a>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: Blue, margin: margin }}
                  className="calendar"
                  icon={faCalendarDay}
                />
                <a href="">Calendar</a>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: Yellow, margin: margin }}
                  className="bell"
                  icon={faBell}
                />
                <a href="">Reminders</a>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: LightPurple, margin: margin }}
                  className="clock"
                  icon={faClock}
                />
                <a href="">Planning</a>
              </li>
            </ul>

            {/* Company Section  */}
            <li>
              <label
                htmlFor="company"
                className="company"
                onClick={this.toggleCompany}
              >
                Company
                {/* <li>
                    <a href="">Company</a>
                  </li> */}
                {showCompany ? (
                  <FontAwesomeIcon
                    className="caretUp"
                    style={{ margin: marginforcarets }}
                    icon={faCaretUp}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="caretUp"
                    style={{ margin: marginforcarets }}
                    icon={faCaretDown}
                  />
                )}
              </label>
            </li>
            <ul
              className="company-item"
              style={{
                display: `${this.state.showCompany ? "block" : "none"}`,
              }}
            >
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li></li>
            <li></li>
          </ul>
          <div className="buttons">
            <button className="login">log in</button>
            <button className="register">register</button>
          </div>
        </div>

        {/* Navbar items section ends here  */}

        <div
          className="overlay"
          style={{
            position: "absolute",
            display: `${showMenu ? "block" : "none"}`,
          }}
        ></div>
      </nav>
    );
  }
}

export default Navbar;
