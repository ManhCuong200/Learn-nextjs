'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'

interface User {
  name: string;
  email: string;
  password?: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [status, setStatus] = useState({ 
    isLoading: false, 
    error: '', 
    success: '' 
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ isLoading: true, error: '', success: '' })
    const { name, email, password, confirmPassword } = formData
    // 1. Validate: Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
      setStatus({ isLoading: false, error: 'Mật khẩu xác nhận không khớp!', success: '' })
      return
    }
    let storedUsers: User[] = []
    const localData = localStorage.getItem('users')
    if (localData) {
      storedUsers = JSON.parse(localData)
    }
    // 2. Validate: Kiểm tra email đã tồn tại chưa
    const isEmailExist = storedUsers.find((user) => user.email === email)
    if (isEmailExist) {
      setStatus({ isLoading: false, error: 'Email này đã được sử dụng!', success: '' })
      return 
    }
    // 3. THÀNH CÔNG: Lưu user mới vào localStorage (Dùng Spread thay vì push)
    storedUsers = [
      ...storedUsers,
      { name, email, password }
    ]
    localStorage.setItem('users', JSON.stringify(storedUsers))
    // Báo thành công (Ở ứng dụng thật sẽ dùng router.push('/login') để chuyển trang)
    setStatus({ isLoading: false, error: '', success: 'Đăng ký thành công! Hãy chuyển sang Đăng nhập.' })
    // Reset form cho sạch đẹp
    setFormData({ name: '', email: '', password: '', confirmPassword: '' })
  }
  return (
    <>
      {status.error && (
        <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-lg">{status.error}</div>
      )}
      {status.success && (
        <div className="mb-4 p-3 text-sm text-green-600 bg-green-100 rounded-lg">{status.success}</div>
      )}

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
            required 
            disabled={status.isLoading} 
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
            required 
            disabled={status.isLoading} 
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
            disabled={status.isLoading} 
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
            disabled={status.isLoading} 
          />
        </div>

        <button 
          type="submit" 
          disabled={status.isLoading} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg flex justify-center items-center mt-2"
        >
          {status.isLoading ? 'Đang xử lý...' : 'Đăng ký ngay'}
        </button>
      </form>

      {/* Chuyển hướng Đăng nhập */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Đã có tài khoản?{' '}
        <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">Đăng nhập</a>
      </p>
    </>
  )
}

export default RegisterForm