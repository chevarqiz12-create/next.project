"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { Modals } from "@/features/auth/ui/Modals";

interface AuthModalContextType {
  openModal: () => void;
  closeModal: () => void;
  token: string | null;
}

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  return (
    <AuthModalContext.Provider
      value={{
        openModal: () => setShowModal(true),
        closeModal: () => setShowModal(false),
        token,
      }}
    >
      {children}
      {showModal && (
        <Modals
          setShowModal={setShowModal}
          onAuthSuccess={(newToken) => {
            setToken(newToken);
            setShowModal(false);
          }}
        />
      )}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const ctx = useContext(AuthModalContext);
  if (!ctx) throw new Error("useAuthModal must be used within AuthModalProvider");
  return ctx;
}