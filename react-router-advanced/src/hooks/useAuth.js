// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // This can just simulate login state for now
  const [isAuthenticated] = useState(true); // change to false to simulate logged out
  return { isAuthenticated };
}
