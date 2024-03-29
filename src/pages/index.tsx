import Head from "next/head";
import HeroHeader from "@/components/HeroHeader";
import Navigation from "@/atoms/Navigation";
import MaxWrapper from "@/atoms/MaxWrapper";
import SecondaryWrapper from "@/atoms/SecondaryWrapper";
import OverallData from "@/components/OverallData";
import Features from "@/components/Features";
import ChoosePlan from "@/components/ChoosePlan";
import HugeGlobalNetwork from "@/components/HugeGlobalNetwork";
import Partner from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <>
      <Head>
        <title>LaselessVpn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <MaxWrapper>
          <SecondaryWrapper>
            <Navigation />
            <HeroHeader />
            <OverallData />
            <Features />
            <ChoosePlan />
            <HugeGlobalNetwork />
            <Partner />
            <Reviews />
            <Subscribe />
            <Footer />
          </SecondaryWrapper>
        </MaxWrapper>
      </main>
    </>
  );
};

export default Home;
