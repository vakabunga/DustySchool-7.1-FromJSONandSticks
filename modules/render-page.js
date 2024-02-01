function renderPage(data) {
  pageTitle.textContent = data.title;
  pageContent.innerHTML = data.content;
}
