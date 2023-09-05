type Props={
    promise:Promise<Post[]>
}


export default async function UserPosts({promise}:Props) {
    const posts=await promise;
    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2 className="font-bold text-[28px]">{post.title}</h2>
                <p className="italic">{post.body}</p>
                <br />
            </article>
        )
    })

    return content
}
