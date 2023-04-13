import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "//http://localhost:3000" }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
