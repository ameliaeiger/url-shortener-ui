import React from 'react';
import './UrlContainer.css';
import { deleteUrl } from '../../apiCalls';

const UrlContainer = props => {
  const urlEls = props.urls.map((url, index) => {
    return (
      <div id={index+1} className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        <button
          onClick={event => {
            console.log(event.target.parentElement.id)
            deleteUrl(event.target.parentElement.id)
            }}>DELETE</button>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
