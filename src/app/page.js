'use client'
import Link from 'next/link'
import ProjectContext from './ProjectProvider'
import { useContext, useEffect, useState } from 'react'

const getProjects = async () => {
  const resp = await fetch(`/api/projects`)
  const projects = await resp.json()
  return projects
}

export default function ProjectList() {
  const [projectList, setProjectList] = useState([])
  useEffect(() => {
    getProjects().then((projects) => setProjectList(projects))
  }, [])

  console.log('projectList', projectList)

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 gap-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4 lg:pl-0 lowercase font-semibold">
          Projects
        </p>
      </div>
      {projectList.map((project) => (
        <Link
          className="hover:scale-105 ease-in duration-300"
          key={project.name}
          href={`/${project.id}`}
        >
          <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800  dark:text-white">
                {project.name}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>

            {/* <img
              className="object-cover w-full h-48 mt-2"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
              alt="NIKE AIR"
            /> */}

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className="text-lg font-bold text-white">Jan 1, 2000</h1>
              {/* <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button> */}
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
