import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
