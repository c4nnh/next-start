import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className="text-red-500 font-bold text-3xl">
      home page - {JSON.stringify(session)} -
      <button onClick={() => signIn()}>sign in</button>
      <br />
      <Link className="text-blue-500" href="/pokemon">
        Go to pages/post/[pid].js
      </Link>
    </div>
  );
};

export default Home;
