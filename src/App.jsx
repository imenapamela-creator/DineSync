import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CredentialsPage from "./pages/CredentialsPage";
import OverviewPage from "./pages/OverviewPage";
import MenuPage from "./pages/MenuPage";
import OrdersPage from "./pages/OrdersPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import ClientMenuPage from "./pages/ClientMenuPage";
import CartPage from "./pages/CartPage";
import ViewItemPage from "./pages/ViewItemPage";
import BookTablePage from "./pages/BookTablePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Landing & Authentication */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/credentials" element={<CredentialsPage />} />
        <Route path="/register-restaurant" element={<CredentialsPage />} />

        {/* Admin management */}
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/dashboard/overview" element={<OverviewPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/dashboard/menu" element={<MenuPage />} />
        <Route path="/orders" element={<OrdersPage />} />

        {/* Client experience */}
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/client-menu" element={<ClientMenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/view-item" element={<ViewItemPage />} />
        <Route path="/book-table" element={<BookTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;