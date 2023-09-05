import { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";


type Params={
    params:{
        userId:string
    }
}
export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }

}

export default async function UserIdpage({params :{ userId }}:Params) {
    const userData:Promise<User>=await getUser(userId);
    const postsData:Promise<Post[]>=await getUserPosts(userId);
    // const [user,userPosts]=await Promise.all([userData,postsData]);
    const user=await userData;

   
  return (
    <>
     <h2 className="font-bold text-[28px]">{user.name}</h2>
     <br />
     <Suspense fallback={<h2>Loading...</h2>}>
               
                <UserPosts promise={postsData} />
      </Suspense>
      <Link href='/user' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go back to more Users</Link>
    </>
  )
}
