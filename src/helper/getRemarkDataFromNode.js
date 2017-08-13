export default function getRemarkDataFromNode(qlQueryData) {
  return qlQueryData.allMarkdownRemark.edges.map((data) => {
    return data.node.frontmatter
  })
}
