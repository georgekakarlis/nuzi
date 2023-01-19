import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      <nav className="  sm:max-w-screen mx-auto flex w-full justify-between border-b-4  bg-white  md:max-w-screen-xl ">
        <div className=" px-2 md:flex ">
          <ul className="m-4 flex justify-start p-2 ">
            <li className="text-2xl">
              <Link href="/">Nuzi</Link>
            </li>

            {/* <li className="">
              {session?.user && (
                <>
                  <Link
                    href={`/dashboard`}
                    className="ml-2 items-center text-xl  text-green-500"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </li> */}
          </ul>
        </div>
        <div className="m-4 flex sm:p-2 md:p-2">
          {!session && (
            <>
              <a
                href={`/auth/signin`}
                className=" mr-5 ml-2 w-full  rounded-md bg-green-900 px-3 py-2 text-white hover:bg-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className=" float-left my-auto mr-4 h-9 w-9 overflow-hidden rounded-sm bg-white bg-cover bg-no-repeat" //avatar
                />
              )}
              <span className="">
                <small>Signed in as</small>
                <br />
                <p className="mr-2">
                  {session.user.name ?? session.user.email}
                </p>
                <Link href={`/dashboard`} className="text-sm">
                  Dashboard
                </Link>
              </span>
              <a
                href={`/api/auth/signout`}
                className="  my-auto mr-2 ml-2 w-1/4  rounded-md bg-green-900 px-2 py-1 text-white hover:bg-gray-400 " //button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
