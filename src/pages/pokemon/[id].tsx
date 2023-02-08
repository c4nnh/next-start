import { useRouter } from "next/router";

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;

  return <p>{id}</p>;
}
