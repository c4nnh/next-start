import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  const { code } = router.query;

  return <div>error {code}</div>;
}
