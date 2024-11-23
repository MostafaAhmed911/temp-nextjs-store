import React from "react";

async function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Welcome to [Next Store Project] At [Next Store Project], we believe that
        every piece of furniture tells a story. Founded with a passion for
        design and a commitment to quality, we provide thoughtfully curated
        collections that blend style, comfort, and functionality. Whether you’re
        furnishing a cozy apartment or designing your dream home, we offer a
        diverse range of furniture to match your unique taste. From timeless
        classics to modern trends, our pieces are crafted to transform your
        space into a haven of beauty and practicality. Why Choose Us? Quality
        You Can Trust: We source only the finest materials to ensure durability
        and elegance. Affordable Luxury: Premium designs that fit your budget.
        Seamless Shopping Experience: With user-friendly navigation, fast
        shipping, and exceptional customer support, we make decorating your home
        effortless.
      </p>
    </section>
  );
}

export default AboutPage;
