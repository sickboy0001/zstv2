import { ModalType } from "@/components/modal/modalType";
import ModalCore from "@/components/modalCore";
import type { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
const Navigation = ({ session }: { session: Session | null }) => {
  // console.log(session);

  return (
    <>
      {session ? (
        <>
          <div>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/profile"
            >
              Profile [{session.user.email}]
            </Link>
          </div>
          <div>
            <form action="/auth/logout" method="post">
              <button
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                type="submit"
              >
                ログアウト
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div>
            <ModalCore modalType={ModalType.SignIn}></ModalCore>
          </div>
          <div>
            <ModalCore modalType={ModalType.SignUp}></ModalCore>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
