import LandingHeroSection from "../components/landing/landing-hero-section";
import LandingDogsSection from "../components/landing/landing-dogs-section";
import MoreFriendsSection from "../components/landing/landing-moreFriends-section";
import LandingMoreProducts from "../components/landing/landing-more-products";
import LandingPetSellersSection from "../components/landing/landing-petSellers-section";
import LandingKnowledgeSection from "../components/landing/landing-knowledge-section";
import LandingSummerEvent from "../components/landing/landing-summer-event";
import Footer from "../components/Footer.jsx";
import dogsData from "../../public/json/dogs.json";
import productsData from "../../public/json/products.json";
import petSellersData from "../../public/json/pet-sellers.json";
import knowledgeData from "../../public/json/knowledge-dogs.json";
import "../i18n.js";

const firstEightDogs = dogsData.slice(0, 8);

const Landing = () => {
  return (
    <>
      <LandingHeroSection />
      <LandingDogsSection dogs={firstEightDogs} />
      <MoreFriendsSection />
      <LandingMoreProducts products={productsData} />
      <LandingPetSellersSection sellers={petSellersData} />
      <LandingKnowledgeSection knowledgeData={knowledgeData} />
      <LandingSummerEvent />
      <Footer />
    </>
  );
};

export default Landing;
