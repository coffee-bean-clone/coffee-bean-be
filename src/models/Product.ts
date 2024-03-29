import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
  isSale: { type: Boolean, required: true },
  isNew: { type: Boolean, required: true },
  detailImage: { type: String, default: null, unique: false }, // 기본값으로 null 설정
  productImages: [{ type: String, required: true }],
});

const Product = mongoose.model('Product', productSchema);
export default Product;
