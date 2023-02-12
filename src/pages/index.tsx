import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { AppLayout } from '../components/layouts/App'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <AppLayout>
      <div className="text-red-500 font-bold text-3xl">
        home page - {JSON.stringify(session?.user?.role)}
      </div>
    </AppLayout>
  )
}

export default Home
