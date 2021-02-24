import React, { useState, useEffect } from 'react'

const PageTitle = ({ title, subtitle, bgColor, color }) => {
  return (
    <div className='page-title-category'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <style jsx>{`
          .page-title-category {
              background-color: ${bgColor};
              padding: var(--container-padding);
          }
          .page-title-category h1,
          .page-title-category p{
           color: ${color}
          }
          @media(min-width: 968px){
            padding: 0 80px
          }
          `}
      </style>
    </div>
  )
}
export default PageTitle
