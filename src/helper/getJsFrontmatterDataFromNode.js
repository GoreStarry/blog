export default function getJsFrontmatterDataFromNode(qlQueryData) {
  return qlQueryData.allJsFrontmatter.edges.map((data) => {
    return data.node.data
  })
}
