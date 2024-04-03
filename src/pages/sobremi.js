// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const SobreMi = () => {
 return (
  <Layout pageTitle='sobre mi'>
  <p>Hago web desde Aranjuez</p>

 </Layout>
 )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title= "Sobre Mí"/>
// Step 3: Export your component
export default SobreMi


