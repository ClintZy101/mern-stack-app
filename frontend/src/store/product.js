import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please provide all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    console.log(newProduct);
    return { success: true, message: "Product Added Successfully!" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    // {products: data} => this still works, find out why
    set({ products: data.data});
    return { success: true, message: data.message };
  },
  deleteProduct: async (productID) => {
    const res = await fetch(`/api/products/${productID}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.success === false) {
      return { success: false, message: data.message };
    }
    set(state => ({
      products: state.products.filter(product => product._id !== productID),
    }));
    return {success: true, message: "Product Deleted Successfully"}
  },
  updateProduct: async(productID) => {
    const res = await fetch(`/api/products/${productID}`,{
      method: "PUT",
      headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
    })
    const data = await res.json();
    if(!data.success){
      return {success: false, message: data.message}
    }
    // update ui immediately without needing to refresh
    set(state=>({
      products: state.products.map(product=> (product._id === productID ? data.data : product))
    }))
  }

}));
