'use client'
import { useContext } from 'react'
import Description from './description'
import Title from './title'
import RepositoryContext, { RepositoryProvider } from '../RepositoryProvider'

const getREADME = async (repository) => {
  const content = await fetch(
    `${process.env.API_URL}/${process.env.USERNAME}/repos`
  )
}

export default function Details() {
  const { repository } = useContext(RepositoryContext)
  return (
    <>
      <Title titleText={repository.name} />
      <Description descriptionText={repository.description} />
    </>
  )
}
