import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import DetailPage from './pages/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'detail/:product-id', element: <DetailPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> }
    ]
  },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <RegisterPage /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
