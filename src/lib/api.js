import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL,
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3",
});

export const fetchProducts = async (params = {}) => {
  try {
    const response = await api.get("products", {
      ...params,
      status: params.status || "publish",
    });
    return response.data || [];
  } catch (error) {
    console.error(
      "Error fetching products:",
      error?.response?.data || error.message
    );
    return [];
  }
};

export const fetchProductsWithMeta = async (params = {}) => {
  try {
    const response = await api.get("products", {
      ...params,
      status: params.status || "publish",
    });
    return {
      products: response.data || [],
      total: parseInt(response.headers["x-wp-total"], 10) || 0,
      totalPages: parseInt(response.headers["x-wp-totalpages"], 10) || 0,
    };
  } catch (error) {
    console.error(
      "Error fetching products with meta:",
      error?.response?.data || error.message
    );
    return { products: [], total: 0, totalPages: 0 };
  }
};

export const fetchProductBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const response = await api.get("products", { slug, status: "publish" });
    return response.data?.[0] || null;
  } catch (error) {
    console.error(
      "Error fetching product:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export const fetchCategories = async (params = {}) => {
  try {
    const response = await api.get("products/categories", {
      ...params,
      hide_empty: params.hide_empty !== false,
    });
    return response.data || [];
  } catch (error) {
    console.error(
      "Error fetching categories:",
      error?.response?.data || error.message
    );
    return [];
  }
};

export const fetchCategoryBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const response = await api.get("products/categories", { slug });
    return response.data?.[0] || null;
  } catch (error) {
    console.error(
      "Error fetching category:",
      error?.response?.data || error.message
    );
    return null;
  }
};
