import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog Posts" />
    <h1>Latest Blog</h1>
    {data.allMarkdownRemark.edges.map(post => {
      return (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by: {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
          <br />
          <br />
          <hr></hr>
        </div>
      )
    })}
  </Layout>
)
export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            path
            title
          }
          id
        }
      }
    }
  }
`

export default BlogPage
