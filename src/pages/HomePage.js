import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductLists from "../components/ProductLists";
import Banner from "../components/Banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <ProductLists />
    </>
  );
}
