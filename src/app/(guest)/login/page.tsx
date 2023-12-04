'use client'
import Link from 'next/link'
import * as Yup from 'yup'
import axios, { AxiosError } from 'axios'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'

import { useAuth } from '@/hooks/auth'

interface Values {
  email: string
  password: string
  remember: boolean
}

const LoginPage = () => {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const submitForm = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>,
  ): Promise<any> => {
    try {
      await login(values)
    } catch (error: Error | AxiosError | any) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('The email field is required.'),
    password: Yup.string().required('The password field is required.'),
  })

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden">
        <div className="space-y-3 text-black mb-12">
          <h2 className="text-4xl leading-9 font-bold tracking-[-1px]">
            Login
          </h2>
        </div>

        <Formik
          onSubmit={submitForm}
          validationSchema={LoginSchema}
          initialValues={{ email: '', password: '', remember: false }}>
          <Form className="space-y-4">
            <div>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="bg-white p-3 rounded-2xl w-full border border-[#E6E9EB] placeholder:text-[#99A6AE] leading-[150%] font-medium tracking-[-0.4px] text-[#252729]"
              />

              <ErrorMessage
                name="email"
                component="span"
                className="text-xs text-red-500"
              />
            </div>

            <div className="">
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="bg-white p-3 rounded-2xl w-full border border-[#E6E9EB] placeholder:text-[#99A6AE] leading-[150%] font-medium tracking-[-0.4px] text-[#252729]"
              />

              <ErrorMessage
                name="password"
                component="span"
                className="text-xs text-red-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="remember" className="inline-flex items-center">
                <Field
                  type="checkbox"
                  name="remember"
                  className="rounded border-[#99A6AE] text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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

            <button
              type="submit"
              className="mt-12 w-full px-4 py-3 bg-[#22A2BF] rounded-2xl text-white font-bold tracking-[-0.2px]">
              Login
            </button>

            <div>
              <Link
                href="/register"
                className="text-[#187691] text-sm leading-[150%] tracking-[-0.4px] font-bold">
                Register account
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default LoginPage
