const path = require('path');

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators
  let slug
  if (
    node.internal.type === `MarkdownRemark` ||
    node.internal.type === `JSFrontmatter`
  ) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === ``) {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    // Add slug as a field on the node.
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(edge => {
        let frontmatter = edge.node.frontmatter
        // console.log(frontmatter);
        createPage({
          path: frontmatter.path, // required
          component: blogPostTemplate,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })
    // result.data.allMarkdownRemark.edges
    //   .forEach(({node}) => {
    //     console.log(node.frontmatter.path);
    //     createPage({
    //       path: node.frontmatter.path,
    //       component: blogPostTemplate,
    //       context: {
    //         path: node.frontmatter.path,
    //       } // additional data can be passed via context
    //     });
    //   });
    });
}
