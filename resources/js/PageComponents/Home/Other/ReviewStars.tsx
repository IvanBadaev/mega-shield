import React, { ReactNode } from 'react'

type ReviewStarsProps = {
    starsCount : number,
}

const ReviewStars = ({starsCount} : ReviewStarsProps) => {

    if (starsCount < 0 || starsCount > 5) {
        throw new Error('ReviewStars component got incorrect stars count: expected ')
    }
    const stars : ReactNode[] = [];
    
    for (let i = 0; i < 5; ++i) {
        const star = <svg width="25" height="21" viewBox="0 0 25 21" fill={(i >= starsCount) ? 'none' : '#DC5F12'} className="reviews__star" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.102 7.77375L15.2239 8.0611L15.5356 8.07775L22.8802 8.47009L17.223 12.7335L16.9491 12.9399L17.043 13.2698L18.912 19.8348L15.1423 17.6103L12.6423 16.135L12.3882 15.9851L12.1341 16.135L5.86438 19.8348L7.73339 13.2698L7.82729 12.9399L7.55343 12.7335L1.8962 8.47009L9.24084 8.07775L9.55253 8.0611L9.67445 7.77375L12.3882 1.37778L14.4279 6.18513L15.102 7.77375Z" stroke="#DC5F12"/>
        </svg>
        stars.push(star)
    }

  return (
    <>
        {...stars}
    </>
  )
}

export default ReviewStars
