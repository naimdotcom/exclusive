import { IoCallOutline } from "react-icons/io5";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import { GoMail } from "react-icons/go";
import Button from "../../components/CommonComponents/Button";
import { useFormik } from "formik";
import { useState } from "react";
import { ContactSchema } from "../../validation/Schema";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        console.log("Submitted values", values);
        // you can use axios.post('/api/contact', values) here
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="container px-4 pb-10 mx-auto mt-16">
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-10 mt-10">
        <div className="items-center col-span-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <IoCallOutline
                size={30}
                className="flex items-center p-1 text-white bg-red-500 rounded-full"
              />
              <h1 className="text-lg font-medium font-poppins">Call To Us</h1>
            </div>
            <p className="text-base ">We are available 24/7, 7 days a week.</p>
            <p className="text-base">Phone: +8801611112222</p>
          </div>
          <hr className="h-0.5  my-5 bg-black" />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GoMail
                size={30}
                className="p-2 text-white bg-red-500 rounded-full "
              />
              <h1 className="text-lg font-medium font-poppins">Write To US</h1>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full col-span-9"
          noValidate
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 bg-cs-white_F5F5F5"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 bg-cs-white_F5F5F5"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone *"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 bg-cs-white_F5F5F5"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-sm text-red-500">{formik.errors.phone}</p>
              )}
            </div>
          </div>

          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-full px-3 py-2 mt-4 bg-cs-white_F5F5F5"
            placeholder="Your Message"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-sm text-red-500">{formik.errors.message}</p>
          )}

          <div className="flex justify-end mt-4">
            <Button
              title={loading ? "Sending..." : "Send Message"}
              type="submit"
              BgCss="bg-cs-redDB4444"
              textCss="text-cs-white_FFFFFF"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
