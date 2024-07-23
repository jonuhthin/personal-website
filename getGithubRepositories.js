const apiUrl = 'https://api.github.com/'

const getRepos = async () => {
  const repos = await fetch(apiUrl + 'users/jonuhthin/repos')
  return repos
}

const createRepoLink = (repo) => {
  const newNode = document.createElement('li')
  const link = document.createElement('a')
  link.innerText = repo.name
  link.href = './detail.html'
  newNode.appendChild(link)
  return newNode
}

const repoList = document.querySelector('#repo-list')
getRepos().then((resp) =>
  resp.json().then((repos) => {
    console.log(repos)
    repos.forEach((repo) => {
      repoList.appendChild(createRepoLink(repo))
    })
  })
)
