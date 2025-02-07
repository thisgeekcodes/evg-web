"use client";

import { createContext, useContext, useState } from "react";

// Create a Context
const MenuContext = createContext();

// Context Provider Component
export function MenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

// Custom Hook to use Menu Context
export function useMenu() {
  return useContext(MenuContext);
}
