import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ShieldCheck, ArrowRight, Facebook, CheckCircle } from "lucide-react";
import authImg from "../assets/login_svg.png";

export default function AuthPage({ handleLogin }) {
  const navigate = useNavigate();
  const [view, setView] = useState("login"); // "login" or "signup"
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      
      {/* LEFT COLUMN: Image & Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-gray-50 dark:bg-gray-800 items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <img 
            src={authImg} 
            alt="Authentication" 
            className="w-full h-auto mb-8 drop-shadow-2xl" 
          />
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Tech Mart Experience
          </h1>
          <p className="text-gray-500 text-lg">
            Join thousands of users and get access to exclusive tech deals and lightning-fast checkout.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Form Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20">
        <div className="w-full max-w-[450px]">
          
          {/* LOGIN VIEW */}
          {view === "login" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-10">
                <h2 className="text-4xl font-black text-[#1ABA1A] dark:text-white tracking-tight">Welcome Back</h2>
                <p className="text-gray-500 mt-2 font-medium">login to continue</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="email" placeholder="name@domain.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Password</label>
                    <button type="button" className="text-xs font-bold text-green-600 hover:underline">Forgot password?</button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type={showPass ? "text" : "password"} placeholder="••••••••" className="w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button onClick={() => { handleLogin(); navigate("/"); }} className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-black transition-all flex items-center justify-center gap-2 active:scale-95 shadow-xl">
                  Sign In <ArrowRight size={22} />
                </button>

                <p className="text-center text-gray-500 font-medium pt-4">
                  New to Swoo?{" "}
                  <button onClick={() => setView("signup")} className="text-green-600 font-black hover:underline underline-offset-4">Create Account</button>
                </p>
              </form>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-gray-700"></div></div>
                <div className="relative flex justify-center text-xs font-bold uppercase"><span className="bg-white dark:bg-gray-900 px-4 text-gray-400">Or Continue With</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 font-bold text-sm transition-all">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-5" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 font-bold text-sm text-[#1877F2] transition-all">
                  <Facebook size={20} fill="currentColor" /> Facebook
                </button>
              </div>
            </div>
          )}

          {/* SIGNUP VIEW */}
          {view === "signup" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8">
                <h2 className="text-4xl font-black text-[#1ABA1A] dark:text-white tracking-tight">Register</h2>
                <p className="text-gray-500 mt-2 font-medium">Join to us</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Your Name" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="email" placeholder="email@domain.com" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Confirm</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input type="checkbox" id="terms-v" className="mt-1 w-4 h-4 accent-green-600" required />
                  <label htmlFor="terms-v" className="text-xs text-gray-500 leading-tight">
                    I agree to the <span className="text-green-600 font-bold cursor-pointer">Terms of Service</span> and Privacy Policy.
                  </label>
                </div>

                <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 active:scale-95">
                  Create Account <CheckCircle size={22} />
                </button>

                <p className="text-center text-gray-500 font-medium pt-2">
                  Already have an account?{" "}
                  <button onClick={() => setView("login")} className="text-green-600 font-black hover:underline underline-offset-4">Sign In</button>
                </p>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}