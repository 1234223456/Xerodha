import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

<<<<<<< HEAD
=======
import Navbar from "../Navbar";
import Footer from "../Footer";
>>>>>>> ea022d7e48cb12b2b152967ef3743540090c3899

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
<<<<<<< HEAD
        imageURL="/media/images/kite.png"
=======
        imageURL="media/images/kite.png"
>>>>>>> ea022d7e48cb12b2b152967ef3743540090c3899
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
<<<<<<< HEAD
        imageURL="/media/images/console.png"
=======
        imageURL="media/images/console.png"
>>>>>>> ea022d7e48cb12b2b152967ef3743540090c3899
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
<<<<<<< HEAD
        imageURL="/media/images/coin.png"
=======
        imageURL="media/images/coin.png"
>>>>>>> ea022d7e48cb12b2b152967ef3743540090c3899
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
<<<<<<< HEAD
        imageURL="/media/images/kiteconnect.png"
=======
        imageURL="media/images/kiteconnect.png"
>>>>>>> ea022d7e48cb12b2b152967ef3743540090c3899
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
<<<<<<< HEAD
        imageURL="/media/images/varsity.png"
=======
        imageURL="media/images/varsity.png"
>>>>>>> ea022d7e48cb12b2b152967ef3743540090c3899
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;
