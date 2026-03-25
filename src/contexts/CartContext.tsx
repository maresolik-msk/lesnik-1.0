import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { db, auth, handleFirestoreError, OperationType } from '../../firebase';
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc, getDoc, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { Product } from '../../types';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  addToWishlist: (product: Product) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  placeOrder: (shippingAddress: any) => Promise<string>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    if (!user) {
      setCart([]);
      setWishlist([]);
      return;
    }

    const cartRef = collection(db, 'users', user.uid, 'cart');
    const wishlistRef = collection(db, 'users', user.uid, 'wishlist');

    const unsubscribeCart = onSnapshot(cartRef, (snapshot) => {
      const items = snapshot.docs.map(doc => doc.data() as CartItem);
      setCart(items);
    }, (error) => handleFirestoreError(error, OperationType.GET, `users/${user.uid}/cart`));

    const unsubscribeWishlist = onSnapshot(wishlistRef, (snapshot) => {
      const items = snapshot.docs.map(doc => doc.data() as Product);
      setWishlist(items);
    }, (error) => handleFirestoreError(error, OperationType.GET, `users/${user.uid}/wishlist`));

    return () => {
      unsubscribeCart();
      unsubscribeWishlist();
    };
  }, [user]);

  const addToCart = async (product: Product) => {
    if (!user) return;
    const itemRef = doc(db, 'users', user.uid, 'cart', product.id);
    const itemDoc = await getDoc(itemRef);
    
    if (itemDoc.exists()) {
      await updateDoc(itemRef, { quantity: itemDoc.data().quantity + 1 });
    } else {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      await setDoc(itemRef, cartItem);
    }
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = async (productId: string) => {
    if (!user) return;
    await deleteDoc(doc(db, 'users', user.uid, 'cart', productId));
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!user || quantity < 1) return;
    await updateDoc(doc(db, 'users', user.uid, 'cart', productId), { quantity });
  };

  const addToWishlist = async (product: Product) => {
    if (!user) return;
    const wishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    };
    await setDoc(doc(db, 'users', user.uid, 'wishlist', product.id), wishlistItem);
    toast.success(`${product.name} added to wishlist`);
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;
    await deleteDoc(doc(db, 'users', user.uid, 'wishlist', productId));
  };

  const clearCart = async () => {
    if (!user) return;
    const cartRef = collection(db, 'users', user.uid, 'cart');
    const snapshot = await getDocs(cartRef);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  const placeOrder = async (shippingAddress: any) => {
    if (!user || cart.length === 0) throw new Error('Cannot place order');
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderRef = doc(collection(db, 'orders'));
    const orderData = {
      id: orderRef.id,
      userId: user.uid,
      items: cart,
      total,
      status: 'pending',
      createdAt: serverTimestamp(),
      shippingAddress
    };

    await setDoc(orderRef, orderData);
    await clearCart();
    return orderRef.id;
  };

  return (
    <CartContext.Provider value={{ 
      cart, wishlist, addToCart, removeFromCart, updateQuantity, 
      addToWishlist, removeFromWishlist, clearCart, placeOrder 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
