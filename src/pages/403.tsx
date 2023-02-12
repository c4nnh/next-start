import { ErrorLayout } from '@/components/layouts/Error'
import { useRouter } from 'next/router'

export default function ErrorPage() {
  const router = useRouter()
  const { code } = router.query

  return (
    <ErrorLayout>
      <div>403 {code}</div>
    </ErrorLayout>
  )
}
