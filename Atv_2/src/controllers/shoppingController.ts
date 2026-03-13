import { Request, Response } from 'express';
import ShoppingItem from '../models/ShoppingItem';

export const getItems = async (req: Request, res: Response) => {
  const items = await ShoppingItem.find();
  res.json(items);
};

export const createItem = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const item = new ShoppingItem({ name, price });
  await item.save();
  res.status(201).json(item);
};

export const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const item = await ShoppingItem.findByIdAndUpdate(id, { name, price }, { new: true });
  res.json(item);
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  await ShoppingItem.findByIdAndDelete(id);
  res.json({ message: 'Item excluído com sucesso' });
};