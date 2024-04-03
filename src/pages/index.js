import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
// Step 2: Define your component
const IndexPage = () => {
 return (
   <Layout pageTitle='mi página de inicio'>
    <p>Aranjuez ha cambiado de hora y hace frío</p>
    <StaticImage
       alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
       src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
     />
     <StaticImage src="../images/estanquechinescos.jpg" alt='estanque de chinescos'/>
   </Layout>
 )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title= "Home"/>
// Step 3: Export your component
export default IndexPage


