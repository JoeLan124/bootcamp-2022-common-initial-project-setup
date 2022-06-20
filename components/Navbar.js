import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NavBar(props) {
  const { data: session, status } = useSession();
  return (
    <div>
      <Head>
        <title>Reddit Clone</title>
        <meta name="description" content="A great social network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black text-white h-12 flex pt-3 px-5 pb-2">
        <p>Reddit clone</p>
        <p className="grow"></p>

        <Link
          className="flex-l border px-4 font-bold rounded-full mb-1"
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
        >
          {session ? "logout" : "login"}
        </Link>
      </header>
      {props.children}
    </div>
  );
}
