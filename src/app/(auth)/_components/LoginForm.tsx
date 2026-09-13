'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'

interface User {
  email: string;
  password?: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    const { email, password } = formData
    // Lấy data từ localStorage
    let storedUsers: User[] = []
    const localData = localStorage.getItem('users')
    // Đề phòng trường hợp JSON.parse bị lỗi (nếu thích an toàn có thể giữ đoạn if này)
    if (localData) {
      storedUsers = JSON.parse(localData)
    }
    if (storedUsers.length === 0) {
      storedUsers = [
        ...storedUsers, 
        { email: 'admin@example.com', password: '123' }
      ]
      localStorage.setItem('users', JSON.stringify(storedUsers))
    }
    const validUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    )
    // THẤT BẠI: Cập nhật state lỗi và DỪNG HÀM NGAY LẬP TỨC bằng 'return'
    if (!validUser) {
      setStatus({ isLoading: false, error: 'Email hoặc mật khẩu không chính xác!', success: '' })
      return 
    }
    // THÀNH CÔNG: Nếu code chạy được xuống tới đây nghĩa là tài khoản hợp lệ
    localStorage.setItem('currentUser', JSON.stringify({ email: validUser.email }))
    setStatus({ isLoading: false, error: '', success: 'Đăng nhập thành công!' })
  }
  return (
    <>
      {status.error && (
        <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-lg">{status.error}</div>
      )}
      {status.success && (
        <div className="mb-4 p-3 text-sm text-green-600 bg-green-100 rounded-lg">{status.success}</div>
      )}

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
            required 
            disabled={status.isLoading || !!status.success} 
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
            required 
            disabled={status.isLoading || !!status.success} 
          />
        </div>

        <button 
          type="submit" 
          disabled={status.isLoading || !!status.success} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg flex justify-center items-center"
        >
          {status.isLoading ? 'Đang kiểm tra...' : 'Đăng nhập'}
        </button>
      </form>
    </>
  )
}

export default LoginForm