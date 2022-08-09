export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .catch(error => {
        console.log(error)
      })
}

export const postUrls = (title, urlToShorten) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      long_url: urlToShorten,
      title: title,
    })
  })
}

export const deleteUrl = (id) => {
  fetch(`http://localhost:3001/api/v1/urls/${id}`, {
    method: "DELETE"
  }).then(() => {console.log("Delete successful!")})
}