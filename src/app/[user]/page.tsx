export default async function Page({
    params,
}: {
    params: Promise<{ user: string }>
}) {
    const user = (await params).user
    return <div>My Post: {user}</div>
}