import Head from "next/head";
import Nav1 from "@/components/Nav1";
import ProductMenu from "@/components/productmenu";
import Footer from "@/components/Footer";
import Productmenulist from "@/components/productmenulist";
import TestimonialSlider from "@/components/TestimonialSlider";
import Appointment from "@/components/appointment";
import Question from '@/components/Faq'

const Home = () => {


  return (
    <>
      <Head>
        <title>Restrudant</title>
        <link rel="icon" href="/" />

      </Head>
      <div className='overflow-hidden'>
        <Nav1 />
        <ProductMenu />
        <Question />

        <TestimonialSlider />
        <Productmenulist />
        <Appointment />
        <Footer />


      </div>
    </>
  );
}

export default Home;
