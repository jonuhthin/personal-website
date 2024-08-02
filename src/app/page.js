'use client'
import Link from 'next/link'
import RepositoryContext from './RepositoryProvider'
import { useContext, useEffect, useState } from 'react'

const getRepos = async () => {
  const resp = await fetch(`/api/repositories`)
  const repos = await resp.json()
  return repos
}

export default function RepoList() {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    getRepos().then((repos) => setRepos(repos))
  }, [])

  console.log(repos)
  const { setRepository } = useContext(RepositoryContext)
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 gap-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4 lg:pl-0 lowercase font-semibold">
          Projects
        </p>
      </div>
      {repos.map((repository) => (
        <Link
          className="hover:scale-105 ease-in duration-300"
          key={repository.name}
          onClick={() => {
            console.log('setting repo', repository)
            setRepository(repository)
          }}
          href={{
            pathname: `/${repository.name}`,
          }}
        >
          {repository.name}
        </Link>
      ))}
    </main>
  )
}
