import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorite } from "@/utils/actions";
import React from "react";

async function FavoritesPage() {
  const favorites = await fetchUserFavorite();
  if (favorites.length === 0)
    return <SectionTitle text="you have no favorites yet" />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}

export default FavoritesPage;
