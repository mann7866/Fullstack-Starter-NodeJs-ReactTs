import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserPage from '@/features/user/pages/userPage'
import WelcomePage from '@/pages/welcome'
import UserCreatePage from '@/features/user/pages/userCreatePage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/create" element={<UserCreatePage />} />

        <Route path='/' element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
