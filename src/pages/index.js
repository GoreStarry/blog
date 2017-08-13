import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import IndexContainer from '../containers/IndexContainer';
import getRemarkDataFromNode from '../helper/getRemarkDataFromNode.js';
import getJsFrontmatterDataFromNode from '../helper/getJsFrontmatterDataFromNode.js';

exports.data = {
  title: 'Choropleth on d3v4',
  written: '2017-05-04',
  layoutType: 'post',
  path: 'choropleth-on-d3v4',
  category: 'data science',
  description: 'Things about the choropleth.'
}

export default class Index extends React.Component {
  render() {
    const {data} = this.props;
    const dataRemark = getRemarkDataFromNode(data);
    const dataJsFrontMatter = getRemarkDataFromNode(data);
    return (
      <div>
        <Helmet>
          <title>
            My Index
          </title>
        </Helmet>
        <IndexContainer dataRemark={ dataRemark } dataJsFrontMatter={ dataJsFrontMatter } />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath {
    allJsFrontmatter {
      edges {
        node {
          data {
            title
            written
            layoutType
            path
            category
            description
            error
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "YYYY MMMM DD")
            parent
          }
        }
      }
    } 
  }
`;
