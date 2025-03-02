import React from 'react'

type PolicyPageProps = {
  docUrl : string,
}

const Policy = ({docUrl} : PolicyPageProps) => {
  return (
    <embed src={docUrl} width="100%" style={{'height' : '100vh'}}/>
  )
}

export default Policy
