'use client'
import { useEffect, useState } from 'react'
import { Converter } from 'showdown'
import styles from './readme.css'

const getREADME = async (repository) => {
  const content = await fetch(`/api/${repository}/readme`)
  const text = await content.text()
  return text
}

const getMetadata = async (repository) => {
  const content = await fetch(`/api/${repository}/metadata`)
  const metadata = await content.json()
  console.log(content)
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
    <div className="h-screen w-screen flex flex-col items-center gap-16">
      {metadata && metadata.web_link && (
        <div className="flex-[0_0_50%] self-stretch">
          <iframe
            allowFullScreen
            width="100%"
            height="100%"
            src={metadata.web_link + '?mode=embed'}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            frameborder="0"
          ></iframe>
        </div>
      )}
      <div className="readme flex-[0_1_auto] md:w-10/12 lg:w-3/4 xl:w-1/2">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          // className="overflow-y-auto"
        />
      </div>
    </div>
  )
}
