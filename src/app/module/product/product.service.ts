import mongoose from 'mongoose';
import { Product } from './product.interface';
import ProductModel from './product.model';

const createProductIntoDB = async (ProductData: Product) => {
  const result = await ProductModel.create(ProductData);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductsFromDB = async (id: mongoose.Types.ObjectId) => {
  const objectId = new mongoose.Types.ObjectId(id);
  return await ProductModel.findById(objectId);
};

const updateSingleProductIntoDB = async (id: string, productData: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, productData);
  return result;
};

// deleted product
const deleteSingleProductIntoDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

// search item
const searchProductsFromDB = async (searchTerm: string) => {
  return await ProductModel.findOne({
    name: searchTerm,
  });
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  updateSingleProductIntoDB,
  deleteSingleProductIntoDB,
  searchProductsFromDB,
};
