// import React from "react";
// import { FaHeart } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// function FavoriteToggleForm({ productId }: { productId: string }) {
//   return (
//     <Button size="icon" variant="outline" className="p-2 cursor-pointer">
//       <FaHeart />
//     </Button>
//   );
// }
// export default FavoriteToggleForm;
"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
