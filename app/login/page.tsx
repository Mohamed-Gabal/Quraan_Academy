'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiMailLine, RiLockPasswordLine, RiEyeLine } from '@remixicon/react';
import Link from 'next/link';
import { loginSchema } from '@/lib/validations/auth';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    // هنا بتبعت الداتا للـ API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f6] px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-[#013724] p-8 text-center text-white">
          <h2 className="text-3xl font-serif font-bold">Welcome Back</h2>
          <p className="text-gray-300 text-sm mt-2">Log in to continue your Quran journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <div className="relative">
              <RiMailLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input 
                {...register("email")}
                type="email" 
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#f4b400] outline-none transition-all`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <Link href="#" className="text-xs text-[#013724] font-bold hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input 
                {...register("password")}
                type="password" 
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#f4b400] outline-none transition-all`}
              />
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message as string}</p>}
          </div>

          <button 
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-[#f4b400] hover:bg-[#d4a017] text-[#013724] font-extrabold py-4 rounded-xl shadow-lg transform transition-all active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? 'Logging in...' : 'Sign In'}
          </button>

          <p className="text-center text-sm text-gray-500 pt-4">
            Don't have an account?
            <Link href="/register" className="text-[#013724] font-bold hover:underline">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;