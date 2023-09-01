import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Customers from './pages/Customers'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ProductDetailTest from './pages/ProductDetailTest'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'
import Analytics from './pages/Analytics'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="orders" element={<Orders/>} />
      <Route path="products" element={<Products />} />
      <Route path="customers" element={<Customers />} />
      <Route path="dashboards" element={<Create />} />
      <Route path="analytics" element={<Analytics />} />

      <Route path="products/:productId" element={<ProductDetail />} />
      <Route path="orders/1" element={<OrderDetail />} />


    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
