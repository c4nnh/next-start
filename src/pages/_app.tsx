import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps as NAppProps } from "next/app";
import { NextPage } from "next";
import { Role } from "../types";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  roles?: Role[];
};

type AppProps = Omit<NAppProps, "Component"> & {
  Component: NextPageWithAuth;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Auth roles={Component.roles}>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  );
}

const Auth: React.FC<
  PropsWithChildren & {
    roles?: Role[];
  }
> = ({ children, roles }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  const router = useRouter();

  const isAuthorized = useMemo(() => {
    if (!roles || !roles.length) {
      return true;
    }
    if (!session?.user?.role) return false;
    return (
      session?.user?.role === Role.ADMIN || roles.includes(session?.user?.role)
    );
  }, [session, roles]);

  useEffect(() => {
    if (status === "loading") return;

    if (!isUser && roles && roles?.length) {
      router.push("/error/401");
      return;
    }

    if (isUser && !isAuthorized) {
      router.push("/error/403");
      return;
    }
  }, [isAuthorized, isUser, roles, router, session, status]);

  if (isUser || !roles || !roles.length) {
    return <>{children}</>;
  }

  return <div>Loading</div>;
};
