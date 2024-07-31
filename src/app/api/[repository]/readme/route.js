export async function GET(req, { params }) {
  const resp = await fetch(
    `${process.env.API_URL}/repos/${process.env.GH_USERNAME}/${params.repository}/readme`,
    {
      headers: {
        Authorization: 'Bearer ' + process.env.GH_TOKEN,
        Accept: 'application/vnd.github.html+json',
      },
    }
  )
  return resp
}
