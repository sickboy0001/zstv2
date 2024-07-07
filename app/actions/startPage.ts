"use server"

import prisma from "@/lib/prismaClient";
import { start_post } from "@prisma/client";


export const getStartPageTypeMany = async ()=>{
    const res = await prisma.start_type.findMany({orderBy:{display_order:'asc'}});
    return res;
}

export const getStartPagePostMany = async ()=>{
    const res = await prisma.start_post.findMany()
    return res;
}

export const getStartPagePost = async (id :number)=>{
    const res = await prisma.start_post.findUnique({
            where:{
                id:id
            },
            include:{
                type:true
            },
        });
    return res;
}


export const createStartPagePost = async ({params}:{params:{user_id:number , 
                title:string , content:string , public_flg:boolean,delete_flg:boolean,type:string}}) =>{
    
   const {user_id,title,content,public_flg,delete_flg,type}=params;

    const type_id = await getStartPageType(type);    

    const post = await prisma.start_post.create({
        data:{
            user_id:user_id ,
            title:title , 
            content:content,
            public_flg :public_flg,
            delete_flg :delete_flg,
            type_id:type_id,
        }
    });

};

export const updateStartPagePost = async ({params}:{params:{id:number , user_id:number , 
    title:string , content:string , public_flg:boolean,delete_flg:boolean,type:string}}) =>{

const {id , user_id,title,content,public_flg,delete_flg,type}=params;

const type_id = await getStartPageType(type);    

const post = await prisma.start_post.update({
    where :{id},
    data:{
        user_id:user_id ,
        title:title , 
        content:content,
        public_flg :public_flg,
        delete_flg :delete_flg,
        type_id:type_id,
    }
});

};

export const getStartPageType = async (type:string)=>{
    console.log(type);
    const res = await prisma.start_type.findMany(
        {where:{
            name:type
        }}
     );
     return res[0].id;
}
