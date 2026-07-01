import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    Code2,
  } from "lucide-react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isloading,setIsLoading] = useState(false)
  const navigate = useNavigate();
  const handleLogin = async () => {
    setIsLoading(true);
    try{
        const response = await axios.post(BASE_URL + '/login', {
            email,
            password
          },
          {withCredentials:true}//enable to set the token in cookie
          );
          console.log(response.data.data);
          dispatch(addUser(response.data.data))
          navigate('/discover')
    }catch(err){
        console.log(err);
    }
  }

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-7xl bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <div className="hidden lg:flex relative bg-gradient-to-br from-secondary via-fuchsia-600 to-pink-700 p-16 text-white flex-col justify-between overflow-hidden">

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="relative">

            <div className="flex items-center gap-3">

              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">

                <Code2 className="h-8 w-8 text-secondary" />

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  DevConnect
                </h2>

                <p className="text-indigo-100">
                  Connect • Build • Grow
                </p>

              </div>

            </div>

            <h1 className="mt-20 text-5xl font-bold leading-tight">

              Welcome Back
              <br />
              Developer 👋

            </h1>

            <p className="mt-8 text-lg leading-8 text-indigo-100">

              Continue building amazing projects,
              collaborate with developers worldwide,
              and grow your career with DevConnect.

            </p>

          </div>

          {/* Features */}

          <div className="relative space-y-6">

            {[
              "Connect with developers worldwide",
              "Build projects together",
              "Real-time messaging",
              "Find jobs & internships",
              "Grow your developer network",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="h-3 w-3 rounded-full bg-green-400"></div>

                <span className="text-lg">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center justify-center p-8 lg:p-16">

          <div className="w-full max-w-md">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-slate-900">
                Login
              </h2>

              <p className="mt-4 text-slate-500">
                Sign in to your DevConnect account
              </p>

            </div>

            {/* Form */}

            <form className="mt-12 space-y-6">

              {/* Email */}

              <div>

                <label className="font-semibold text-slate-700">
                  Email
                </label>

                <div className="relative mt-2">

                  <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-indigo-500"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="font-semibold text-slate-700">
                  Password
                </label>

                <div className="relative mt-2">

                  <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pl-12 pr-12 h-14 rounded-xl focus:border-indigo-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4"
                  >

                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-500" />
                    )}

                  </button>

                </div>

              </div>

                            {/* Remember Me & Forgot Password */}

                            <div className="flex items-center justify-between">

<label className="flex items-center gap-2 cursor-pointer">

  <input
    type="checkbox"
    className="checkbox checkbox-primary checkbox-sm"
  />

  <span className="text-sm text-slate-600">
    Remember me
  </span>

</label>

<Link
  to="/forgot-password"
  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
>
  Forgot Password?
</Link>

</div>

{/* Login Button */}

<button
type="button"
onClick={handleLogin}
className="btn btn-primary w-full h-14 rounded-xl text-base font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
>
{isloading?'Submitting...':'Login'}
</button>

{/* Divider */}

<div className="divider text-slate-400">
OR CONTINUE WITH
</div>

{/* Social Login */}

<div className="grid grid-cols-2 gap-4">

{/* Google */}

<button
  type="button"
  className="btn bg-white text-gray-700 border border-slate-300 hover:bg-slate-50 rounded-xl h-14"
>

  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="h-5 w-5"
  />

  Google

</button>

{/* GitHub */}

<button
  type="button"
  className="btn bg-slate-900 text-white hover:bg-black rounded-xl h-14 border-none"
>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M12 .297a12 12 0 00-3.794 23.39c.6.111.82-.258.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.809 1.303 3.495.996.108-.775.418-1.304.761-1.603-2.665-.303-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 016.006 0c2.292-1.552 3.298-1.23 3.298-1.23.653 1.652.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.476 5.921.43.37.814 1.102.814 2.222v3.293c0 .321.218.694.825.576A12.003 12.003 0 0012 .297z"/>
  </svg>

  GitHub

</button>

</div>

{/* Register */}

<div className="text-center pt-6">

<p className="text-slate-600">

  Don't have an account?

  <Link
    to="/signup"
    className="ml-2 font-semibold text-indigo-600 hover:text-indigo-700"
  >
    Create Account
  </Link>

</p>

</div>

              

              {/* Terms */}

              <p className="mt-8 text-center text-sm text-slate-500 leading-7">

                By continuing you agree to our{" "}

                <Link
                  to="/terms"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Terms of Service
                </Link>

                {" "}and{" "}

                <Link
                  to="/privacy-policy"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Privacy Policy
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>

      {/* Bottom */}

     

    </div>
  );
};

export default Login;

           