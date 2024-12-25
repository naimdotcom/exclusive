const useCalculateDiscount = (
  orginalPrice: number = 0,
  discountPercentange: number = 0
) => {
  const discountAmount: number = (orginalPrice * discountPercentange) / 100;
  const discountPrice: number = orginalPrice - discountAmount;
  return discountPrice;
};

export default useCalculateDiscount;
