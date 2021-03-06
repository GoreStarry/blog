import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

exports.data = {
  title: 'Choropleth on d3v4',
  written: '2017-05-04',
  layoutType: 'post',
  path: 'choropleth-on-d3v4',
  category: 'data science',
  description: 'Things about the choropleth.'
}

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>
          Welcome to page 2
        </p>
        <Link to="/"> Go back to the homepage
        </Link>
      </div>
    )
  }
}
