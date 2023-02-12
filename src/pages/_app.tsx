import { AppLayout } from '@/components/layouts/App'
import '@/styles/global.css'
import { Role } from '@/types'
import { NextPage } from 'next'
import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps as NAppProps } from 'next/app'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect, useMemo } from 'react'

type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  roles?: Role[]
}

type AppProps = Omit<NAppProps, 'Component'> & {
  Component: NextPageWithAuth
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      {(Component.roles || []).length ? (
        <Auth roles={Component.roles}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

const Auth: React.FC<
  PropsWithChildren & {
    roles?: Role[]
  }
> = ({ children, roles }) => {
  const router = useRouter()
  const { data: session, status } = useSession()

  const isAuthorized = useMemo(() => {
    if (!session?.user?.role) return false
    return (
      session?.user?.role === Role.ADMIN ||
      (roles || [Role.ADMIN, Role.USER]).includes(session?.user?.role)
    )
  }, [session, roles])

  useEffect(() => {
    if (status === 'loading') return

    if (!session?.user) {
      router.push('/auth/login')
    }

    if (!isAuthorized) {
      router.push('/403')
    }
  }, [isAuthorized, roles, router, session?.user, status])

  if (isAuthorized) return <>{children}</>

  return <div>loading</div>
}
