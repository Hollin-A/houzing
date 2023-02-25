import React from 'react'

export const SectionTitle = ({ titleText, tagline }) => {
  return (
    <div className="text-center text-dark pb-2 pb-md-3">
    <h3 className="fw-bold mb-1">{titleText}</h3>
    <p>{tagline}</p>
    </div>
  )
}
