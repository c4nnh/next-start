import { AuthLayout } from '@/components'
import { FormInput } from '@/components/forms/FormInput'
import { FormPassword } from '@/components/forms/FormPassword'
import { LoginDto } from '@/types'
import { requiredFieldRule } from '@/utils/form'
import { Button, Form } from 'antd'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export default function Login() {
  const router = useRouter()
  const formMethods = useForm<LoginDto>()
  const { handleSubmit } = formMethods

  const [isLogining, setIsLogining] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const handleLogin = handleSubmit(async (data) => {
    setIsLogining(true)
    const res = await signIn('credentials', {
      redirect: false,
      ...data,
    })

    if (res?.ok) {
      router.push(res.url || '/')
    } else {
      setError('Invalid email or password')
    }

    setIsLogining(false)
  })

  return (
    <AuthLayout>
      <FormProvider {...formMethods}>
        <Form
          layout="vertical"
          size="middle"
          className="flex flex-col"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <FormInput
            name="email"
            label="Email"
            inputProps={{ readOnly: isLogining }}
            rules={requiredFieldRule}
          />
          <FormPassword
            name="password"
            label="Password"
            inputProps={{ readOnly: isLogining }}
            rules={requiredFieldRule}
          />
        </Form>
        <span>{error}</span>
        <Button onClick={handleLogin} type="primary" loading={isLogining}>
          abcd
        </Button>
      </FormProvider>
    </AuthLayout>
  )
}
