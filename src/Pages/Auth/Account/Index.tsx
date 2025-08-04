import { useEffect, useState } from "react";
import BreadCrumb from "../../../components/CommonComponents/BreadCrumb";
import { useGetAuthQuery } from "../../../Features/AllSlices/Api/AuthApi";
import { ErrorMessage, Field, Formik } from "formik";
import {
  passwordValidationSchema,
  profileValidationSchema,
} from "../../../validation/Schema";

type Props = {};

interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  address: string;
}

function Account({}: Props) {
  const [userInfo, setuserInfo] = useState<UserInfo>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    address: "",
  });
  const { data } = useGetAuthQuery();
  const [activeSection, setActiveSection] = useState("profile");
  const sidebarItems = [
    { id: "profile", label: "My Profile", section: "Manage My Account" },
    { id: "address", label: "Address Book", section: "Manage My Account" },
    {
      id: "payment",
      label: "My Payment Options",
      section: "Manage My Account",
    },
    { id: "orders", label: "My Orders", section: "My Orders" },
    { id: "returns", label: "My Returns", section: "My Orders" },
    { id: "cancellations", label: "My Cancellations", section: "My Orders" },
    { id: "wishlist", label: "My Wishlist", section: "My Wishlist" },
  ];

  const handleProfileSubmit = (values: any) => {
    console.log("Profile updated:", values);
    // Handle profile update logic here
  };

  const handlePasswordSubmit = (values: any) => {
    console.log("Password changed:", values);
    // Handle password change logic here
  };

  useEffect(() => {
    setuserInfo(data?.data);
  }, []);
  console.log("user info", data);
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

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="flex-shrink-0 w-64">
          <div className="space-y-6">
            {/* Manage My Account */}
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">
                Manage My Account
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveSection("profile")}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeSection === "profile"
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Profile
                </button>
                <button
                  onClick={() => setActiveSection("address")}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeSection === "address"
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Address Book
                </button>
                <button
                  onClick={() => setActiveSection("payment")}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeSection === "payment"
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Payment Options
                </button>
              </div>
            </div>

            {/* My Orders */}
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">My Orders</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveSection("returns")}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeSection === "returns"
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Returns
                </button>
                <button
                  onClick={() => setActiveSection("cancellations")}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeSection === "cancellations"
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Cancellations
                </button>
              </div>
            </div>

            {/* My Wishlist */}
            <div>
              <button
                onClick={() => setActiveSection("wishlist")}
                className={`block w-full text-left px-3 py-2 rounded font-semibold ${
                  activeSection === "wishlist"
                    ? "text-red-600 bg-red-50"
                    : "text-gray-900 hover:text-gray-700"
                }`}
              >
                My Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {activeSection === "profile" && (
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-red-600">
                Edit Your Profile
              </h2>

              <Formik
                initialValues={{
                  firstName: userInfo?.firstName || "",
                  lastName: userInfo?.lastName || "",
                  email: userInfo?.email || "",
                  address: userInfo?.address || "",
                }}
                validationSchema={profileValidationSchema}
                enableReinitialize={true}
                onSubmit={handleProfileSubmit}
              >
                {({ isSubmitting }) => (
                  <div>
                    <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <Field
                          type="text"
                          name="address"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    {/* Password Change Section */}
                    <div className="pt-6 border-t">
                      <h3 className="mb-4 text-lg font-medium text-gray-900">
                        Password Changes
                      </h3>

                      <Formik
                        initialValues={{
                          currentPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        }}
                        validationSchema={passwordValidationSchema}
                        onSubmit={handlePasswordSubmit}
                      >
                        {({ isSubmitting: isPasswordSubmitting }) => (
                          <div>
                            <div className="mb-6 space-y-4">
                              <div>
                                <Field
                                  type="password"
                                  name="currentPassword"
                                  placeholder="Current Password"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <ErrorMessage
                                  name="currentPassword"
                                  component="div"
                                  className="mt-1 text-sm text-red-500"
                                />
                              </div>

                              <div>
                                <Field
                                  type="password"
                                  name="newPassword"
                                  placeholder="New Password"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <ErrorMessage
                                  name="newPassword"
                                  component="div"
                                  className="mt-1 text-sm text-red-500"
                                />
                              </div>

                              <div>
                                <Field
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="Confirm New Password"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <ErrorMessage
                                  name="confirmPassword"
                                  component="div"
                                  className="mt-1 text-sm text-red-500"
                                />
                              </div>
                            </div>

                            <div className="flex justify-end gap-4">
                              <button
                                type="button"
                                className="px-6 py-2 text-gray-600 hover:text-gray-800"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={() => handlePasswordSubmit}
                                disabled={isPasswordSubmitting}
                                className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50"
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        )}
                      </Formik>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          )}

          {activeSection === "address" && (
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                Address Book
              </h2>
              <p className="text-gray-600">
                Manage your shipping addresses here.
              </p>
            </div>
          )}

          {activeSection === "payment" && (
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                My Payment Options
              </h2>
              <p className="text-gray-600">Manage your payment methods here.</p>
            </div>
          )}

          {activeSection === "returns" && (
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                My Returns
              </h2>
              <p className="text-gray-600">
                View and manage your return requests.
              </p>
            </div>
          )}

          {activeSection === "cancellations" && (
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                My Cancellations
              </h2>
              <p className="text-gray-600">View your cancelled orders.</p>
            </div>
          )}

          {activeSection === "wishlist" && (
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                My Wishlist
              </h2>
              <p className="text-gray-600">Items you've saved for later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
