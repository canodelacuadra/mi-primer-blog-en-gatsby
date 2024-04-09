import * as React  from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
export const query = graphql`
query  {
  allMdx {
    nodes {
      frontmatter {
        title
        date
        slug
      }
      id
    }
  }
}
`
const Blog =   ({data})=>{
    return (
      <Layout pageTitle='Blog'>
       
      {data.allMdx.nodes.map(node=> (
        <div>
        <p>{node.frontmatter.date}</p>
        <h2>{node.frontmatter.title}</h2>
       <button> 
        <Link to={`/blog/${node.frontmatter.slug}`}>Leer más</Link>
        </button>
        <hr/>
        </div>
      ) )}
      
 
     </Layout>
        )
        
   

}
export default Blog
export const Head= ()=><Seo title= "Blog"/>