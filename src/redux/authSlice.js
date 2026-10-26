
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Demo login + registered user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const cleanEmail = email.trim().toLowerCase();

      // Demo account
      if (
        cleanEmail === "demo@chitkara.edu.in" &&
        password === "Chitkara@123"
      ) {
        return {
          name: "Chitkara Student",
          email: cleanEmail,
        };
      }

      // Check previously registered users
      const users = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

      const user = users.find(
        (item) =>
          item.email.trim().toLowerCase() === cleanEmail &&
          item.password === password
      );

      if (user) {
        return {
          name: user.name,
          email: user.email,
        };
      }

      return rejectWithValue("Invalid email or password.");
    } catch {
      return rejectWithValue("Login failed. Please try again.");
    }
  }
);

// Signup: save a new user in this browser
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const users = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

      const cleanEmail = email.trim().toLowerCase();

      const exists = users.some(
        (item) => item.email.trim().toLowerCase() === cleanEmail
      );

      if (exists) {
        return rejectWithValue("This email is already registered.");
      }

      const newUser = {
        name: name.trim(),
        email: cleanEmail,
        password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      return {
        name: newUser.name,
        email: newUser.email,
      };
    } catch {
      return rejectWithValue("Signup failed. Please try again.");
    }
  }
);

const getSavedUser = () => {
  try {
    return JSON.parse(sessionStorage.getItem("currentUser") || "null");
  } catch {
    return null;
  }
};

const initialState = {
  user: getSavedUser(),
  isAuthenticated: Boolean(getSavedUser()),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      sessionStorage.removeItem("currentUser");
    },

    clearAuthError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;

        sessionStorage.setItem(
          "currentUser",
          JSON.stringify(action.payload)
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed.";
      })

      // Signup
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;

        sessionStorage.setItem(
          "currentUser",
          JSON.stringify(action.payload)
        );
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed.";
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
