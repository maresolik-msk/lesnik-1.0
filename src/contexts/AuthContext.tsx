import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithGoogle, logOut, db, FirebaseUser, onAuthStateChanged } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Check/Create user profile in Firestore
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (!userDoc.exists()) {
          const newUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: 'user'
          };
          await setDoc(userDocRef, newUser);
          setIsAdmin(false);
        } else {
          setIsAdmin(userDoc.data().role === 'admin');
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Sign in error:', error);
      if (error.code === 'auth/unauthorized-domain') {
        import('sonner').then(({ toast }) => {
          toast.error('Domain Not Authorized', {
            description: 'Please add this domain to your Firebase Console authorized domains list.',
            duration: 10000,
          });
        });
      } else {
        import('sonner').then(({ toast }) => {
          toast.error('Sign in failed', {
            description: 'There was an error signing in with Google. Please try again.',
          });
        });
      }
    }
  };

  const signOutUser = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signIn, signOut: signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
