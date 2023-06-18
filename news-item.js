document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    const newsDetails = document.getElementById('news-details');

    function fetchNewsItem() {
        const url = `https://jsonplaceholder.typicode.com/photos/${newsId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayNewsItem(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function displayNewsItem(newsItem) {
        const newsItemHTML = `
        <h2>${newsItem.title}</h2>
        <img src="${newsItem.url}" alt="${newsItem.title}">
      `;

        newsDetails.innerHTML = newsItemHTML;
    }

    fetchNewsItem();
});
