import toast from "react-hot-toast";

const successToast = (msg: string) => toast.success(msg);

const errorToast = (msg: string) => toast.error(msg);
const infoToast = (msg: string) => toast(msg, { icon: "ℹ" });

export { successToast, errorToast, infoToast };
