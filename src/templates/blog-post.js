import React from 'react';
import Helmet from 'react-helmet';

// import '../css/blog-post.css';

export default function Template({data}) {
  console.log(data);
  const {markdownRemark: post} = data;
  return (
    <div className="blog-post-container">
      <Helmet title={ `Your Blog Name - ${post.frontmatter.title}` } />
      <div className="blog-post">
        <h1>{ post.frontmatter.title }</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={ { __html: post.html } } />
      </div>
    </div>
    );
}

export const pageQuery = graphql`
  query markdownTemplateBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
