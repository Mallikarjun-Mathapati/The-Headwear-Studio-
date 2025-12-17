import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL,
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3",
});

// Simple in-memory cache for server-side requests
const cache = new Map();
const CACHE_DURATION = 60 * 1000; // 1 minute cache

const getCached = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  cache.delete(key);
  return null;
};

const setCache = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

export const fetchProducts = async (params = {}) => {
  const cacheKey = `products_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await api.get("products", {
      ...params,
      status: params.status || "publish",
    });
    const data = response.data || [];
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error?.response?.data || error.message
    );
    return [];
  }
};

export const fetchProductsWithMeta = async (params = {}) => {
  const cacheKey = `products_meta_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await api.get("products", {
      ...params,
      status: params.status || "publish",
    });
    const result = {
      products: response.data || [],
      total: parseInt(response.headers["x-wp-total"], 10) || 0,
      totalPages: parseInt(response.headers["x-wp-totalpages"], 10) || 0,
    };
    setCache(cacheKey, result);
    return result;
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
  
  const cacheKey = `product_${slug}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await api.get("products", { slug, status: "publish" });
    const product = response.data?.[0] || null;
    if (product) setCache(cacheKey, product);
    return product;
  } catch (error) {
    console.error(
      "Error fetching product:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export const fetchCategories = async (params = {}) => {
  const cacheKey = `categories_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await api.get("products/categories", {
      ...params,
      hide_empty: params.hide_empty !== false,
    });
    const data = response.data || [];
    setCache(cacheKey, data);
    return data;
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
  
  const cacheKey = `category_${slug}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await api.get("products/categories", { slug });
    const category = response.data?.[0] || null;
    if (category) setCache(cacheKey, category);
    return category;
  } catch (error) {
    console.error(
      "Error fetching category:",
      error?.response?.data || error.message
    );
    return null;
  }
};
