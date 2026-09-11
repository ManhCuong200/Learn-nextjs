import Link from 'next/link';
import RegisterForm from './_components/RegisterForm';

export default function RegisterPage() {
  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tạo tài khoản</h1>
        <p className="text-xs text-gray-500 mt-1">
          Đăng ký để bắt đầu viết và chia sẻ bài viết của bạn
        </p>
      </div>

      {/* Form đăng ký Client */}
      <RegisterForm />

      <p className="text-xs text-center text-gray-500 mt-6">
        Đã có tài khoản rồi?{' '}
        <Link
          href="/login"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Đăng nhập ngay
        </Link>
      </p>
    </div>
  );
}