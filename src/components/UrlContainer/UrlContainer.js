import React from 'react';
import { getUrls } from '../../apiCalls';
import './UrlContainer.css';

const UrlContainer = ({urls, deleteUrls}) => {
  const urlEls = urls.map((url, index) => {
    return (
      <div id={index+1} className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        <button
          onClick={event => {
            deleteUrls(event.target.parentElement.id)
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
