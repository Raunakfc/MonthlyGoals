"use client";

import { auth, googleProvider } from "../../frontend/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in successfully!");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed. Check console.");
    }
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginTop:"100px" }}>
      <h1>Login</h1>
      <button
        style={{ padding:"10px 20px", marginTop:"20px", cursor:"pointer", fontSize:"16px", zIndex:999 }}
        onClick={loginWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}
