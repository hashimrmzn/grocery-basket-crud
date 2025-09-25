import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  deleteProductByIdService,
  updateProductService,
} from "../models/productService.js";
import handleResponse from "../utils/utils.js";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await createProductService(req.body);
    res.status(201).json({
      status: 201,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    next(error); 
  }
};


export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsService();
    handleResponse(res, 200, "Products fetched successfully", products);
  } catch (error) {
    next(error); 
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await getProductByIdService(req.params.id);
    if (product) {
      handleResponse(res, 200, "Product fetched successfully", product);
    } else {
      handleResponse(res, 404, "Product record not found!", null);
    }
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const product = await updateProductService(req.params.id, req.body);

    if (product) {
      handleResponse(res, 200, "Product updated successfully", product);
    } else {
      handleResponse(res, 404, "Product not found");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (req, res, next) => {
  try {
    const product = await deleteProductByIdService(req.params.id);
    if (product) {
      handleResponse(res, 200, "Product deleted successfully", product);
    } else {
      handleResponse(res, 404, "Product record not found!", null);
    }
  } catch (error) {
    next(error);
  }
};

