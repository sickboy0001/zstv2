import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const { data: userData, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user data:", error.message);
      return null;
    }

    // ここで user オブジェクトを使って何かを行う
  } else {
    console.error("Error No Session");
  }

  return (
    <div className="divide-y border-gray-200 border-b">
      <div className="px-4 py-1 ">
        <div className="flex items-center justify-between space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
            掲示板
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link
              className="bg-black py-3 px-4 text-white rounded-md font-medium"
              href="/bbs-posts/create"
            >
              Create Post
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/posts/"
            >
              posts
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/about"
            >
              About
            </Link>

            <Navigation session={session} />
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  {session?.user.email}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link
                      className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="/profile"
                    >
                      Edit-[{session?.user.email}]
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link
                      className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="/start-posts/list"
                    >
                      {/* //app/start-posts/list/page.tsx  */}
                      StartPage-list
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link
                      className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="/about"
                    >
                      logout
                    </Link>
                  </MenubarItem>
                  <MenubarItem></MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
