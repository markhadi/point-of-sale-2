/**
 * @file Main application component that handles routing and authentication
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard';
import { Layout } from './components/layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Cashier from './pages/cashier';
import Transaction from './pages/transaction';
import MasterItem from './pages/master/item';
import Category from './pages/master/item/category';
import Brand from './pages/master/item/brand';
import Units from './pages/master/item/units';
import MasterPrice from './pages/master/price';
import Supplier from './pages/master/supplier';
import Receive from './pages/inventory/receive';
import Issued from './pages/inventory/issued';
import UserManager from './pages/user-manager';

/**
 * Root application component that sets up routing and authentication context
 * @component
 * @returns {JSX.Element} The main application component with routing configuration
 */
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          {/* Public Routes - Accessible without authentication */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Protected Routes - Requires authentication */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            {/* Default redirect to dashboard */}
            <Route
              index
              element={
                <Navigate
                  to="/dashboard"
                  replace
                />
              }
            />

            {/* Main application routes */}
            <Route
              path="dashboard"
              element={<Dashboard />}
            />
            <Route
              path="cashier"
              element={<Cashier />}
            />
            <Route
              path="transaction"
              element={<Transaction />}
            />

            {/* Master Item Management Routes */}
            <Route path="master-item">
              <Route
                index
                element={<MasterItem />}
              />
              <Route
                path="category"
                element={<Category />}
              />
              <Route
                path="brand"
                element={<Brand />}
              />
              <Route
                path="units"
                element={<Units />}
              />
            </Route>

            {/* Inventory Management Routes */}
            <Route
              path="master-price"
              element={<MasterPrice />}
            />
            <Route
              path="supplier"
              element={<Supplier />}
            />
            <Route
              path="receive"
              element={<Receive />}
            />
            <Route
              path="issued"
              element={<Issued />}
            />

            {/* User Management Route */}
            <Route
              path="user-manager"
              element={<UserManager />}
            />
          </Route>

          {/* Catch all unmatched routes and redirect to dashboard */}
          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
