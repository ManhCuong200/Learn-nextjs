import Link from 'next/link';
import LoginForm from './_components/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-xs text-gray-500 mt-1">Enter your details to sign in</p>
      </div>

      {/* Form tương tác */}
      <LoginForm />

      <p className="text-xs text-center text-gray-500 mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-indigo-600 font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}