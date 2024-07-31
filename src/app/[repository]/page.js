'use client'
import { useContext, useEffect, useState } from 'react'
import Description from './description'
import Title from './title'
import RepositoryContext, { RepositoryProvider } from '../RepositoryProvider'
// import Showdown from 'showdown'

const getREADME = async (repository) => {
  const content = await fetch(`/api/${repository}/readme`)
  const text = await content.text()
  return text
}

export default function Details({ params }) {
  const [content, setContent] = useState(<p>nothing to see here.</p>)
  useEffect(() => {
    getREADME(params.repository).then((c) => setContent(c))
    return () => setContent()
  }, [])
  console.log(content)
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
