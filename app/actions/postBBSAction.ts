"use server"

// import { z } from "zod"
// import { formSchema } from "../bbs-posts/create/page"
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// export const postBBS = async ({username , title , content}:z.infer<typeof formSchema>) =>{
export const postBBS = async (username:string , title:string , content:string) =>{
        const post = await prisma.post.create({
        data:{
            username:username ,
            title:title , 
        content:content
        }
    });
    revalidatePath("/posts/");
    redirect("/posts/")
    
}
