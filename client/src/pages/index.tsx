import { type NextPage } from "next";
import Layout from "../components/Layout";
import Hero from "../components/UI/Hero";
import Hero2 from "../components/UI/Hero/Hero2";
import Hero3 from "../components/UI/Hero/Hero3";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Hero2 />
        <Hero3 />
      </Layout>
    </>
  );
};

export default Home;
