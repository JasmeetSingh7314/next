
import Link from "next/link"
import styles from './styles.module.css'
import getAllUsers from "@/lib/getAllUsers"

export default async function UsersPage() {
    const usersData: Promise<User[]>= getAllUsers();

    const users=await usersData;

    const content=(
        <section>
            <h2>
               <Link href='/' className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Link to home page</Link>
            </h2>
            <br/>
            {
                users.map(user=>{
                    return(
                        <>
                         <p key={user.id}>
                            <Link href={`/user/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{user.name}</Link>
                         </p>
                         <br/>
                        </>
                    )
                })
            }
        </section>
    )
    
  return content;
}
