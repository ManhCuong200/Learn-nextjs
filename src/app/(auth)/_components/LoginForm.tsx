'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'

interface User {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  // Gọi trực tiếp React.ChangeEvent
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value 
    })
  }
  // Gọi trực tiếp React.FormEvent
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = formData
    let storedUsers: User[] = []
    const localData = localStorage.getItem('users')
    if (localData) {
      storedUsers = JSON.parse(localData)
    }
    // Tự tạo tài khoản mẫu nếu chưa có ai đăng ký
    if (storedUsers.length === 0) {
      storedUsers = [...storedUsers, 
        { email: 'admin@example.com', password: '123' }]
      localStorage.setItem('users', JSON.stringify(storedUsers))
    }
    const validUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    )
    // THẤT BẠI: Bắn toast lỗi và DỪNG HÀM NGAY LẬP TỨC
    if (!validUser) {
      toast.error('Email hoặc mật khẩu không chính xác!')
      return
    }
    // THÀNH CÔNG
    localStorage.setItem('currentUser', JSON.stringify({ email: validUser.email }))
    toast.success('Đăng nhập thành công!')
    setFormData({ email: '', password: '' })
    // Nếu dùng Next.js, ở đây bạn có thể thêm: 
    // router.push('/dashboard')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange}
            placeholder="admin@example.com" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"  
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={formData.password} 
            onChange={handleChange}
            placeholder="••••••••" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"  
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg flex justify-center items-center mt-2 disabled:opacity-70"
        >
            Đăng nhập
        </button>
      </form>
      
      {/* Chuyển hướng sang trang Đăng ký (nếu bạn có làm ở layout ngoài thì có thể bỏ qua phần này) */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Chưa có tài khoản?{' '}
        <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
          Đăng ký ngay
        </Link>
      </p>
    </>
  )
}

export default LoginForm