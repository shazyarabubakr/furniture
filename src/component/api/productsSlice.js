// import { api } from "./productsApi";

// export const productsApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => "/#/",
//       providesTags: ["Products"],
//     }),
//     addProducts: builder.mutation({
//       query: (product) => ({
//         url: "/#/",
//         method: "POST",
//         body: product,
//       }),
//       invalidatesTags: ["Products"],
//     }),
//     completeProducts: builder.mutation({
//       query: (product) => ({
//         url: `/#/${product.id}`,
//         method: "PATCH",
//         body: product,
//       }),
//       invalidatesTags: ["Products"],
//     }),
//     deleteProducts: builder.mutation({
//       query: ({ id }) => ({
//         url: `/#/${id}`,
//         method: "DELETE",
//         body: id,
//       }),
//       invalidatesTags: ["Products"],
//     }),
//   }),
// });

// export const {
//   useGetProductsQuery,
//   useAddProductsMutation,
//   useCompleteProductsMutation,
//   useDeleteProductsMutation,
// } = productsApi;
