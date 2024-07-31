export async function GET() {
  const myRepos = await getUserRepos()
  const myStarredRepos = await getStarredRepos()
  const starredUrls = myStarredRepos.map((e) => e.html_url)
  const displayRepos = myRepos.filter((e) => starredUrls.includes(e.html_url))
  return Response.json(displayRepos)
}

async function getStarredRepos() {
  const resp = await fetch(`${process.env.API_URL}/user/starred`, {
    headers: { Authorization: 'Bearer ' + process.env.GH_TOKEN },
  })
  const repos = await resp.json()
  return repos
}

async function getUserRepos() {
  const resp = await fetch(`${process.env.API_URL}/user/repos`, {
    headers: { Authorization: 'Bearer ' + process.env.GH_TOKEN },
  })
  const repos = await resp.json()
  return repos
}
