import { useEffect, useState } from "react";
import BreadCrumb from "../../../components/CommonComponents/BreadCrumb";
import { useGetAuthQuery } from "../../../Features/AllSlices/Api/AuthApi";

type Props = {};

interface userInfo {
  email: string;
  firstName: string;
  phoneNumber: string;
  role: string;
}

function Account({}: Props) {
  const [userInfo, setuserInfo] = useState<userInfo>();
  const { data } = useGetAuthQuery();
  console.log(userInfo);
  useEffect(() => {
    setuserInfo(data?.data);
  }, []);
  return (
    <div className="container my-20">
      {/*  bread crumb and username show-case */}
      <div className="flex justify-between">
        <BreadCrumb />
        <div>
          Welcome!
          <span className="text-cs-redDB4444 "> {userInfo?.firstName}</span>
        </div>
      </div>

      {/*  */}
      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Account;
