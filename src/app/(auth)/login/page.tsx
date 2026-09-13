import LoginForm from '../_components/LoginForm'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Khung trắng chứa form */}
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {/* Tiêu đề */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Tạo tài khoản</h2>
          <p className="text-gray-500 mt-2 text-sm">Vui lòng điền thông tin bên dưới</p>
        </div>
        {/* Import LoginForm vào đúng vị trí bên trong khung */}
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage