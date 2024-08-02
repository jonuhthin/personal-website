export async function GET(req, { params }) {
  const resp = await fetch(
    `${process.env.API_URL}/repos/${process.env.GH_USERNAME}/${params.repository}/contents/metadata.json`,
    {
      headers: {
        Authorization: 'Bearer ' + process.env.GH_TOKEN,
        Accept: 'application/vnd.github+json',
      },
    }
  )
  const json = await resp.json()
  console.log(json)
  return new Response(json.status === '404' ? undefined : atob(json.content))
}
