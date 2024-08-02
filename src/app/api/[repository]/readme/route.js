export async function GET(req, { params }) {
  const resp = await fetch(
    `${process.env.API_URL}/repos/${process.env.GH_USERNAME}/${params.repository}/contents/README.md`,
    {
      headers: {
        Authorization: 'Bearer ' + process.env.GH_TOKEN,
        Accept: 'application/vnd.github.raw+json',
      },
    }
  )
  //TODO: error handling if no readme
  return resp
}
