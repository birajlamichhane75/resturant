import Image from "next/image";
import Head from 'next/head'
import Nav1 from "@/components/Nav1";
import Footer from "@/components/Footer";
import Gallery from "./Gallery";
export default function Home() {
  return (
   
  <>
  <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     <title>Gallery</title>
       
          

          

      </Head>
  <div className='overflow-hidden'>
    <Nav1/>
<Gallery/>

<Footer/>


 
 



  </div>

  
  </>
  );
}
