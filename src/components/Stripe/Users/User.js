import React from 'react'

export default function User(props) {
  const { min, src, alt, name } = props;
  return (
    <div>
      <a className={min ? "user min" : "user"} href="#">
        <img src={src} alt={alt}></img>
        <div>{name}</div>
      </a>
    </div>
  )
}
