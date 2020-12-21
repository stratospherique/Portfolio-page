import React from "react";

const Typography = ({type, text, size}) => {

  const renderMarkup = () => {
    switch (type) {
    case 'title':
    return <h1>{text}</h1>
    case 'section-heading':
      return <h2>{text}</h2>
    default:
      return <span>{text}</span>  
    }
  }

  return (
    <>
      {renderMarkup()}
    </>
  )
}

export default Typography;