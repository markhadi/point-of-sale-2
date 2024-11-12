/**
 * @file Application routing configuration using React Router
 * Defines all available routes and their corresponding components
 */

import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/dashboard/index';
import Cashier from '@/pages/cashier/index';
import Transaction from '@/pages/transaction/index';
import MasterItem from '@/pages/master/item/index';
import Category from '@/pages/master/item/category';
import Brand from '@/pages/master/item/brand';
import Units from '@/pages/master/item/units';
import MasterPrice from '@/pages/master/price/index';
import Supplier from '@/pages/master/supplier/index';
import Receive from '@/pages/inventory/receive/index';
import Issued from '@/pages/inventory/issued/index';
import UserManager from '@/pages/user-manager/index';

/**
 * Router configuration object that defines the application's routing structure
 * @constant
 * @type {Router}
 *
 * Routes are organized into following categories:
 * - Public routes (login)
 * - Protected routes (requires authentication)
 *   - Dashboard
 *   - Operations (Cashier, Transaction)
 *   - Master Data Management
 *   - Inventory Management
 *   - User Management
 */
export const router = createBrowserRouter([
  /**
   * Public route - Authentication page
   */
  {
    path: '/login',
    element: <Login />,
  },
  /**
   * Protected routes - Main application layout with authenticated access
   */
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      /**
       * Default redirect to dashboard
       */
      {
        index: true,
        element: (
          <Navigate
            to="/dashboard"
            replace
          />
        ),
      },
      /**
       * Main dashboard route
       */
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      /**
       * Operations routes
       */
      {
        path: 'cashier',
        element: <Cashier />,
      },
      {
        path: 'transaction',
        element: <Transaction />,
      },
      /**
       * Master Item Management routes
       * Includes nested routes for item-related configurations
       */
      {
        path: 'master-item',
        children: [
          {
            index: true,
            element: <MasterItem />,
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'brand',
            element: <Brand />,
          },
          {
            path: 'units',
            element: <Units />,
          },
        ],
      },
      /**
       * Additional Master Data routes
       */
      {
        path: 'master-price',
        element: <MasterPrice />,
      },
      {
        path: 'supplier',
        element: <Supplier />,
      },
      /**
       * Inventory Management routes
       */
      {
        path: 'receive',
        element: <Receive />,
      },
      {
        path: 'issued',
        element: <Issued />,
      },
      /**
       * User Management route
       */
      {
        path: 'user-manager',
        element: <UserManager />,
      },
    ],
  },
  /**
   * Catch-all route - Redirects undefined routes to dashboard
   */
  {
    path: '*',
    element: (
      <Navigate
        to="/dashboard"
        replace
      />
    ),
  },
]);
