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
