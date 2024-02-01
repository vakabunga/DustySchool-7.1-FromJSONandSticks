const page = document.querySelector('.page');
const pageTitle = document.createElement('h1');
const pageContent = document.createElement('p');
page.appendChild(pageTitle);
page.appendChild(pageContent);

pageContent.addEventListener('click', (event) => {
  event.preventDefault();
  target = event.target;
  if (target.classList.contains('link')) {
    const link = target.href.substring(21);
    console.log(link);
    dataRequest(link)
      .then(data => {
        renderPage(data);
      });
  }
})

dataRequest('')
  .then((data) => {
    renderPage(data);
  })
