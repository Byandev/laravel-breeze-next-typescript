'use client'
import Link from 'next/link'
import * as Yup from 'yup'
import axios, { AxiosError } from 'axios'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'

import { useAuth } from '@/hooks/auth'
import ApplicationLogo from '@/components/ApplicationLogo'

interface Values {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const RegisterPage = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const submitForm = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>,
  ): Promise<any> => {
    try {
      await register(values)
    } catch (error: Error | AxiosError | any) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('The name field is required.'),
    email: Yup.string()
      .email('Invalid email')
      .required('The email field is required.'),
    password: Yup.string().required('The password field is required.'),
  })

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md overflow-hidden space-y-6">
        <div className="flex justify-center">
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
        </div>

        <div className="space-y-3 text-black">
          <h2 className="text-4xl leading-9 font-bold tracking-[-1px]">
            Register
          </h2>
        </div>

        <Formik
          onSubmit={submitForm}
          validationSchema={RegisterSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
          }}>
          <Form className="space-y-4">
            <div>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className="bg-white p-3 rounded-2xl w-full border border-[#E6E9EB] placeholder:text-[#99A6AE] leading-[150%] font-medium tracking-[-0.4px] text-[#252729]"
              />

              <ErrorMessage
                name="name"
                component="span"
                className="text-xs text-red-500"
              />
            </div>

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

            <div className="">
              <Field
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                className="bg-white p-3 rounded-2xl w-full border border-[#E6E9EB] placeholder:text-[#99A6AE] leading-[150%] font-medium tracking-[-0.4px] text-[#252729]"
              />

              <ErrorMessage
                name="password_confirmation"
                component="span"
                className="text-xs text-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#22A2BF] rounded-2xl text-white font-bold tracking-[-0.2px]">
              Register
            </button>

            <div>
              <Link
                href="/login"
                className="text-[#187691] text-sm leading-[150%] tracking-[-0.4px] font-bold">
                Already registered?
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default RegisterPage
