import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  endpoints: (builder) => ({
    GetAuth: builder.query<any, void>({
      query: () => "/auth/verify",
    }),
  }),
});

const { useGetAuthQuery } = AuthApi;

export { AuthApi, useGetAuthQuery };
