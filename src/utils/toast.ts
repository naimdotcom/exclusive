import toast from "react-hot-toast";

const successToast = (msg: string) => toast.success(msg);

const errorToast = (msg: string) => toast.error(msg);
const infoToast = (msg: string, duration: number = 5000) =>
  toast(msg, { duration });

export { successToast, errorToast, infoToast };
