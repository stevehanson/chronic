import { Link } from "@remix-run/react";
import { LinkButton } from "~/components/LinkButton";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-yellow-500 drop-shadow-md">
                Chronic
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl sm:max-w-3xl">
              A tool to log and track chronic pain.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              {user ? (
                <Link
                  to="/notes"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                >
                  View Notes for {user.email}
                </Link>
              ) : (
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <LinkButton to="/join" variant="ghost" text="Sign up" />
                  <LinkButton to="/login" variant="primary" text="Log In" />
                </div>
              )}
            </div>
            <a href="https://remix.run">
              <img
                src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                alt="Remix"
                className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
