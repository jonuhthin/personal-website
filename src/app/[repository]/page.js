'use client'
import { useEffect, useState } from 'react'
import { Converter } from 'showdown'
import style from './readme.css'

const getREADME = async (repository) => {
  const content = await fetch(`/api/${repository}/readme`)
  const text = await content.text()
  return text
}

const getMetadata = async (repository) => {
  const content = await fetch(`/api/${repository}/metadata`)
  const metadata = await content.json()
  console.log(metadata)
  return metadata
}

export default function Details({ params }) {
  const [content, setContent] = useState()
  const [metadata, setMetadata] = useState()
  useEffect(() => {
    getREADME(params.repository).then((c) => setContent(c))
    return () => setContent()
  }, [])

  useEffect(() => {
    getMetadata(params.repository).then((c) => setMetadata(c))
    return () => setMetadata()
  }, [])

  console.log(metadata)
  if (!content) return <p>Nothing to see here :(</p>

  const cvtr = new Converter({ tables: true })
  const html = cvtr.makeHtml(content)
  return (
    <>
      <style jsx>{style}</style>
      {metadata && metadata.web_link && (
        <iframe width="100%" height="500px" src={metadata.web_link}></iframe>
      )}
      <div
        // style={{ all: 'unset' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
