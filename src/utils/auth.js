import { mockAuth } from "./mockData";

const USE_MOCK = import.meta.env.VITE_APP_USE_MOCK_DATA === "true";

export const authBaseUrl = USE_MOCK
  ? ""
  : import.meta.env.VITE_AUTH_API_BASE_URL || "http://localhost:3001";

const login = async (email, password) => {
  if (USE_MOCK) {
    const stored = localStorage.getItem("mockUser");
    let user;
    if (stored) {
      user = JSON.parse(stored);
    } else {
      user = { name: "Demo User", email: "demo@example.com" };
    }
    return {
      success: true,
      user,
      token: "mock-jwt-token-123456",
    };
  }
  try {
    const response = await fetch(`${authBaseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    return await response.json();
  } catch (error) {
    console.error("Auth API error:", error);
    throw error;
  }
};

const register = async (name, email, password) => {
  if (USE_MOCK) {
    const user = { name, email };
    localStorage.setItem("mockUser", JSON.stringify(user));
    return {
      success: true,
      user,
      token: "mock-jwt-token-123456",
    };
  }
  try {
    const response = await fetch(`${authBaseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) {
      throw new Error("Failed to register");
    }
    return await response.json();
  } catch (error) {
    console.error("Auth API error:", error);
    throw error;
  }
};

const checkToken = async (token) => {
  if (USE_MOCK) {
    return mockAuth.user;
  }
  try {
    const response = await fetch(`${authBaseUrl}/checkToken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to check token");
    }
    return await response.json();
  } catch (error) {
    console.error("Auth API error:", error);
    throw error;
  }
};

export { login, register, checkToken, USE_MOCK };
