'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'

interface User {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value 
    })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, password, confirmPassword } = formData
    // 1. Validate: Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
      toast.error('Mật khẩu xác nhận không khớp!')
    }
    let storedUsers: User[] = []
    const localData = localStorage.getItem('users')
    if (localData) {
      storedUsers = JSON.parse(localData)
    }
    // 2. Validate: Kiểm tra email đã tồn tại chưa
    const isEmailExist = storedUsers.find((user) => user.email === email)
    if (isEmailExist) {
      toast.error('Email này đã được sử dụng!')
    }
    // 3. THÀNH CÔNG: Lưu user mới
    storedUsers = [
      ...storedUsers,
      { name, email, password }
    ]
    localStorage.setItem('users', JSON.stringify(storedUsers))
    // Bắn thông báo Toast thành công
    toast.success('Đăng ký thành công! Hãy chuyển sang Đăng nhập.')
    setFormData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  return (
    <>
      {/* Đã xóa các thẻ div hiển thị error/success báo lỗi cũ */}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Họ và tên */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange}
            placeholder="Ví dụ: Nguyễn Văn A" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange}
            placeholder="you@example.com" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
          />
        </div>

        {/* Mật khẩu */}
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
            required 
            minLength={6}
          />
        </div>

        {/* Xác nhận Mật khẩu */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
          <input 
            type="password" 
            name="confirmPassword" 
            id="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange}
            placeholder="••••••••" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg flex justify-center items-center mt-2"
        >
            Đăng ký
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Đã có tài khoản?{' '}
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
          Đăng nhập
        </Link>
      </p>
    </>
  )
}

export default RegisterForm