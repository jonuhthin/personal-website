'use client'
import { useContext } from 'react'
import Description from './description'
import Title from './title'
import RepositoryContext, { RepositoryProvider } from '../RepositoryProvider'

export default function Details() {
  const { repository } = useContext(RepositoryContext)
  return (
    <>
      <Title titleText={repository.name} />
      <Description descriptionText={repository.description} />
    </>
  )
}
