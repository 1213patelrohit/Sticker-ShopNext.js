"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import HotBit from "./HotBit/HotBit";
import TopCollection from "./TopCollection/TopCollection";
import Category from "./Category/Category";
import CreateSellNFT from "./Category/CreateSellNFT/CreateSellNFT";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div>
      <Hero />
      <HotBit />
      <TopCollection />
      <Category />
      <CreateSellNFT />
    </div>
  );
};

export default HomePage;
