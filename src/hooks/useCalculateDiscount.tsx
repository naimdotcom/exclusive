const useCalculateDiscount = (
  orginalPrice: number,
  discountPercentange: number
) => {
  const discountAmount: number = (orginalPrice * discountPercentange) / 100;
  const discountPrice: number = orginalPrice - discountAmount;
  return discountPrice;
};

export default useCalculateDiscount;
