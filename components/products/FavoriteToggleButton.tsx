import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
      id={productId}
    >
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
