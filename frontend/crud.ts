import { db } from "./firebaseDB";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { Category } from "./types";

const categoriesCol = collection(db, "categories");

// Add category (without id)
export const addCategory = async (category: Omit<Category, "id">) => {
  await addDoc(categoriesCol, category);
};

// Get all categories
export const getCategories = async (): Promise<Category[]> => {
  const snapshot = await getDocs(categoriesCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category));
};

// Update category
export const updateCategory = async (id: string, updates: Partial<Category>) => {
  const categoryDoc = doc(db, "categories", id);
  await updateDoc(categoryDoc, updates);
};

// Delete category
export const deleteCategory = async (id: string) => {
  const categoryDoc = doc(db, "categories", id);
  await deleteDoc(categoryDoc);
};
