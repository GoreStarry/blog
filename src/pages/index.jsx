import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import IndexContainer from '../containers/IndexContainer';
import getRemarkDataFromNode from '../helper/getRemarkDataFromNode.js';
import getJsFrontmatterDataFromNode from '../helper/getJsFrontmatterDataFromNode.js';
import sortListByDate from '../helper/sortListByDate.js';

export default class Index extends React.Component {
  render() {
    const {data} = this.props;
    const dataRemark = getRemarkDataFromNode(data);
    const dataJsFrontMatter = getJsFrontmatterDataFromNode(data);
    const sortedDataByDate = sortListByDate([...dataRemark, ...dataJsFrontMatter]);
    console.log(sortedDataByDate);
    return (
      <div>
        <Helmet>
          <title>
            My Index
          </title>
        </Helmet>
        <IndexContainer postData={ sortedDataByDate } />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath{
    allJsFrontmatter {
      edges {
        node {
          data {
            title
            date
            tag
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
            date(formatString: "YYYY-MM-DD")
            tag
            parent
          }
        }
      }
    } 
  }
`;
