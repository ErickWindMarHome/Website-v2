import React from 'react'
import PageNotFoundOne from './PageNotFoundOne'
import PageNotFoundTwo from './PageNotFoundTwo'
import PageNotFoundThree from './PageNotFoundThree'
import PageNotFoundFour from './PageNotFoundFour'

function PageNotFoundP() {
  const components = [<PageNotFoundOne />, <PageNotFoundTwo />, <PageNotFoundThree />, <PageNotFoundFour />]

  const RandomComponent = components[Math.floor(Math.random() * components.length)]

  return <div>{RandomComponent}</div>
}

export default PageNotFoundP
