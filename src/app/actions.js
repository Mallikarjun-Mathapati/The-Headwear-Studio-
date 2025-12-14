"use server";

import { fetchProducts } from "@/lib/api";

export async function getProductsByCategory(categoryId) {
  try {
    if (categoryId === "all" || !categoryId) {
      return await fetchProducts({
        per_page: 20,
        orderby: "date",
        order: "desc",
      });
    }

    return await fetchProducts({
      category: categoryId,
      per_page: 6, // We only show 6 items in the grid
      orderby: "date",
      order: "desc",
    });
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    return [];
  }
}
