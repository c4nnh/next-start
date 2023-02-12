import { ErrorLayout } from '@/components/layouts/Error'
import { useRouter } from 'next/router'

export default function ErrorPage() {
  const router = useRouter()
  const { code } = router.query

  return (
    <ErrorLayout>
      <div>404 {code}</div>
    </ErrorLayout>
  )
}
