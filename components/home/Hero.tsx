import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
Explore a wide selection of stylish and durable furniture for every room in your home. We offer quality pieces at competitive prices, designed to elevate your living space. Enjoy exceptional craftsmanship and customer service with every purchase. Transform your home with us!
        </p>
        <Button asChild size="lg" className="mt-20">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
