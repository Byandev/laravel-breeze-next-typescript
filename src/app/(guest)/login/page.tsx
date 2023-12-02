'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (router.query?.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset))
    } else {
      setStatus(null)
    }
  })

  const submitForm = async event => {
    event.preventDefault()

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    })
  }

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden">
        <div className="space-y-3 text-black mb-12">
          <h2 className="text-4xl leading-9 font-bold tracking-[-1px]">
            Sign in
          </h2>
          <p className="leading-[150%] tracking-[-0.4px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={submitForm}>
          <div>
            <input
              id="email"
              type="email"
              value={email}
              className="bg-white p-3 rounded-2xl w-full border border-[#E6E9EB] placeholder:text-[#99A6AE] leading-[150%] font-medium tracking-[-0.4px] text-[#252729]"
              onChange={event => setEmail(event.target.value)}
              required
              autoFocus
              placeholder="Email Address"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <input
              id="password"
              type="password"
              value={password}
              className="bg-white p-3 rounded-2xl w-full border border-[#E6E9EB] placeholder:text-[#99A6AE] leading-[150%] font-medium tracking-[-0.4px] text-[#252729]"
              onChange={event => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="rounded border-[#99A6AE] text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setShouldRemember(event.target.checked)}
              />

              <span className="ml-2 text-[#252729] text-sm leading-[150%] tracking-[-0.4px] font-medium">
                Remember me
              </span>
            </label>

            <Link
              href="/forgot-password"
              className="text-[#187691] text-sm leading-[150%] tracking-[-0.4px] font-bold">
              Forgot your password?
            </Link>
          </div>

          <button className="mt-12 w-full px-4 py-3 bg-[#22A2BF] rounded-2xl text-white font-bold tracking-[-0.2px]">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
