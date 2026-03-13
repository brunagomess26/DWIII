import mongoose, { Document, Schema } from 'mongoose';

export interface IShoppingItem extends Document {
  name: string;
  price: number;
}

const ShoppingItemSchema: Schema = new Schema({
  name:  { type: String, required: true },
  price: { type: Number, required: true }
});

export default mongoose.model<IShoppingItem>('ShoppingItem', ShoppingItemSchema);