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
import ProductNew from './pages/ProductNew'
import OrderPage from './pages/components/OrderDetail/OrderDetail'
import Total_Sale from './pages/components/Analytics/Reports/Total_Sales'
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();


//FORGET ABOUT FETCHING HERE, JUST FETCH IN THE LIST AND DETAIL SEPARATELY TO BE EASIER USING REACT QUERY
//OR USE USELOCATION TO MOVE THE STATE

// router and routes


const router = createBrowserRouter(
  

  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="orders" element={<Orders/>} />

      {/* <Route path="orders" element={<OrderPage/>} /> */}
      <Route path="products" element={<Products/>} />
      <Route path="customers" element={<Customers />} />
      <Route path="dashboards" element={<Create />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="products/new" element={<ProductNew />} />
      <Route path="products/:productId" element={<ProductDetail />} />
      <Route path="orders/1" element={<OrderDetail />} />

      <Route path="analytics/total_sale" element={<Total_Sale />} />


    </Route>
  )
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
