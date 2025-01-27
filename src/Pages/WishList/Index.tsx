import ProductCard from "../../components/CommonComponents/ProductCard";
import ProductCommonComponentLayout from "../../components/CommonComponents/ProductCommonComponentLayout";
import { useGetProductByLimitQuery } from "../../Features/AllSlices/Api/productApi";

type Props = {};

function WishList({}: Props) {
  const { data } = useGetProductByLimitQuery(5);
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-y-20">
        <div>
          <ProductCommonComponentLayout
            buttonTitle="Move All To Bag"
            buttonBgCss="bg-transparent border-2 border-black text-black "
            componentData={data?.products}
            cards={ProductCard}
            // descriptionCss=""
            wishList={`WishList (${data?.limit})`}
            topButtonNavigateTo="/cart"
          />
        </div>
        <div>
          <ProductCommonComponentLayout
            buttonTitle="See All"
            buttonBgCss="bg-transparent border-2 border-black text-black "
            componentData={data?.products}
            cards={ProductCard}
            descriptionCss="text-black font-normal text-lg"
            description={`Just For You`}
            topButtonNavigateTo="/products"
          />
        </div>
      </div>
    </div>
  );
}

export default WishList;
