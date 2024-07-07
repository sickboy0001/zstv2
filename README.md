# step 1 プロトタイプ作成

- Vercel デプロイまで
- 基本機能準備
  - 基本機能
    - ログイン、サインイン、Supabase
    - NextJS 14 　 React
    - DB supabase

# 以下エラーログです。削除予定

```
.next/types/app/bbs-posts/create/page.ts:8:13
Type error: Type 'OmitWithTag<typeof import("C:/work/dev/spa/zstwsb/app/bbs-posts/create/page"), "metadata" | "default" e"), "metadata" | "default" | "config" | "generateStaticParams" | "revalidate" | "dynamic" |e ... | "generateViewport",  "dynamicParams" | ... 6 more ... | "generateViewport", "">' does not satisfy the constraint '{ [x: string]: never; }'.
  Property 'formSchema' is incompatible with index signature.                                ZodTypeAny, { username: str
    Type 'ZodObject<{ username: ZodString; title: ZodString; content: ZodString; }, "strip", ZodTypeAny, { username: string; title: string; content: string; }, { ...; }>' is not assignable to type 'never'.

   6 |
   7 | // Check that the entry is a valid entry
>  8 | checkFields<Diff<{
     |             ^
   9 |   default: Function
  10 |   config?: {}
  11 |   generateStaticParams?: Function
   Linting and checking validity of types  ...
```

ShinCode 様から頂いた、MSG

```
エラーは型チェックに関するものです。
具体的には、app/bbs-posts/create/page.tsファイルの型定義に問題があるようです。このエラーは、Zodaries の定義と、Next です。
.js のページのコンポーネントの型定義の間に不一致がある可能性があります。
解決策は以下の通りです。
import { z } from 'zod'; // Zod スキーマ定義エクスポート

const formSchema = z.object
		({
		username: z.string()
		, title: z.string()
		, content: z.string(),
		}); // 型推論

type FormData =
	z.infer<typeof formSchema>; // ページ コンポーネントのエクスポート デフォルト

function CreatePost()
{
	// ここにコンポーネント ロジックを記述
	return
	( // ここに JSX を記述
	);
} // オプションで、フォーム スキーマをエクスポートする必要がある場合は
export { formSchema };
このコードでは以下の修正を行います。

・ZodashをformSchemaとして定義し、エクスポートしています。
・FormData型をZodashから推論しています。
・ページコンポーネントをdefault exportとして定義しています。
・必要に応じてformSchemaもエクスポートしています。

これらの変更により、型の不一致を解消し、Next.js のページコンポーネントと
ZodSchema を正しく統合できるはずです。
よろしくお願いします！
```
