export async function GET() {
  const resp = await fetch(
    `${process.env.API_URL}/users/${process.env.GH_USERNAME}/repos`
  )
  const repo_data = await resp.json()
  return Response.json(repo_data)
}
