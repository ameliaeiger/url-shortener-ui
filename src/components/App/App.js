import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { getUrls, deleteUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export const App = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    getUrls().then(data => {
      console.log(data)
      setUrls(
        data.urls
      )
    })
  },[urls])

  const deleteUrls = (id) => {
    deleteUrl(id)
    getUrls()
  }

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={urls} deleteUrls={deleteUrls}/>
      </main>
    );
  }

export default App;
