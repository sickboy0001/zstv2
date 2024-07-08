import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import SupabaseListener from "@/components/supabaseListener";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";
/**
 * ログイン後のマイページ
 */
const MyPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
      <h1 className="text-2xl font-bold">
        <p>
          ようこそ！
          {session?.user.email}
        </p>
      </h1>
      <h1 className="text-2xl font-bold">ログインに成功しました</h1>
      <div className="pt-10">
        <form action="/auth/logout" method="post">
          <button
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            ログアウト
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
