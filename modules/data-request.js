function dataRequest(url) {
  return fetch('http://localhost:3000' + url)
  .then(response => response.json())
  .then(data => data);
}
