import { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { axiosinstance } from "../../../helper/axios";
import { successToast } from "../../../utils/toast";
import { useGetCartQuery } from "../../../Features/AllSlices/exclusiveApi/exclusiveApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Features/Cart/Cart";

type Props = {};

const PaymentSuccess = ({}: Props) => {
  const navigate = useNavigate();
  const { data, refetch } = useGetCartQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    axiosinstance
      .delete("/cart")
      .then((res) => {
        console.log(res.data.message);
        successToast(res.data.message);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(addToCart(data?.data));
    }
    console.log(data);
  }, [data]);

  return (
    <div className="container py-16 -mb-8">
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 text-center bg-white shadow-lg rounded-2xl">
          <IoMdCheckmarkCircleOutline className="w-16 h-16 mx-auto text-green-500" />
          <h2 className="mt-4 text-2xl font-semibold">Payment Successful!</h2>
          <p className="mt-2 text-gray-600">
            Thank you for your payment. Your details have been received.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
