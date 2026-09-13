import RegisterForm from '../_components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Tạo tài khoản</h2>
          <p className="text-gray-500 mt-2 text-sm">Điền thông tin của bạn để bắt đầu</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage