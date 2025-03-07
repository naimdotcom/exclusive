import BreadCrumb from "../../../components/CommonComponents/BreadCrumb";
import { useGetAuthQuery } from "../../../Features/AllSlices/Api/AuthApi";

type Props = {};

function Account({}: Props) {
  const { data, isLoading, isError } = useGetAuthQuery();

  console.log("auth data", data);
  return (
    <div className="container">
      <div className="flex justify-between">
        <BreadCrumb />
        <div>
          Welcome!
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Account;
