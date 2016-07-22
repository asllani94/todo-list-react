import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredclassName = location.pathname === "/" ? "active blue-chambray" : "";
    const archivesclassName = location.pathname.match(/^\/menu1/) ? "active blue-chambray" : "";
    const settingsclassName = location.pathname.match(/^\/menu2/) ? "active blue-chambray" : "";
    const navclassName = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top bg-blue-chambray" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
          </div>
          <div className={"navbar-collapse " + navclassName} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredclassName}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>App 1</IndexLink>
              </li>
              <li className={archivesclassName}>
                <Link to="menu1" onClick={this.toggleCollapse.bind(this)}>App 2</Link>
              </li>
              <li className={settingsclassName}>
                <Link to="menu2" onClick={this.toggleCollapse.bind(this)}>App 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
