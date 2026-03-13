'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiUserLine, RiMailLine, RiLockPasswordLine } from '@remixicon/react';
import Link from 'next/link';
import { registerSchema } from '@/lib/validations/auth';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f6] py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#013724] p-8 text-center text-white">
          <h2 className="text-3xl font-serif font-bold">Join Our Academy</h2>
          <p className="text-gray-300 text-sm mt-2">Start learning Quran with expert tutors today</p>
        </div>

        <form onSubmit={handleSubmit((d) => console.log(d))} className="p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <div className="relative">
                <RiUserLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input {...register("name")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#f4b400]" />
              </div>
              {errors.name && <p className="text-[10px] text-red-500">{errors.name.message as string}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <div className="relative">
                <RiMailLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input {...register("email")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#f4b400]" />
              </div>
              {errors.email && <p className="text-[10px] text-red-500">{errors.email.message as string}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input type="password" {...register("password")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#f4b400]" />
            </div>
            {errors.password && <p className="text-[10px] text-red-500">{errors.password.message as string}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input type="password" {...register("confirmPassword")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#f4b400]" />
            </div>
            {errors.confirmPassword && <p className="text-[10px] text-red-500">{errors.confirmPassword.message as string}</p>}
          </div>

          <button className="w-full bg-[#f4b400] text-[#013724] font-extrabold py-4 rounded-xl shadow-lg mt-4 active:scale-95">
            Create Account
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <Link href="/login" className="text-[#013724] font-bold hover:underline">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;