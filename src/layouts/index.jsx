import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

// import "../css/typography.css"
import config from '../../gatsby-config.js';
const prefixPath = process.env.NODE_ENV === "production" ? config.pathPrefix + '/' : '/';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        { this.props.location.pathname === prefixPath
          ?
          <div>
            <Helmet title="Gatsby Default Starter" meta={ [{ name: "description", content: "Sample" }, { name: "keywords", content: "sample, something" },] } />
            { this.props.children() }
          </div>
          :
          <div>
            <div style={ { background: `rebeccapurple`, marginBottom: `1.45rem`, } }>
              <div style={ { margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, } }>
                <h1 style={ { margin: 0 } }><Link to="/" style={ { color: "white", textDecoration: "none", } }> Gore Starry </Link></h1>
              </div>
            </div>
            <div style={ { margin: `0 auto`, maxWidth: 960, padding: `0px 1.0875rem 1.45rem`, paddingTop: 0, } }>
              { this.props.children() }
            </div>
          </div> }
      </div>
    )
  }
}
