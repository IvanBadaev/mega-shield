import React from 'react'

type SectionTitleProps = {
    sectionClass : string,
    sectionName : string,
}

const SectionTitle = ({sectionClass, sectionName} : SectionTitleProps) => {
  return (
    <div className={sectionClass + '__title-wrapper section-title-wrapper'}>
      <h1 className={sectionClass + '__title section-title'}>{sectionName}</h1>
    </div>
  )
}

export default SectionTitle
