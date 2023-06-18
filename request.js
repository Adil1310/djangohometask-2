document.addEventListener('DOMContentLoaded', function () {
    const newsList = document.getElementById('news-list');
    const newsCountSelect = document.getElementById('postLimit');

    function fetchNews() {
        const url = 'http://jsonplaceholder.typicode.com/photos';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const newsCount = parseInt(newsCountSelect.value);
                const newsData = data.slice(0, newsCount);

                displayNews(newsData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function displayNews(newsData) {
        newsList.innerHTML = '';

        newsData.forEach(newsItem => {
            const listItem = document.createElement('li');
            const newsLink = document.createElement('a');
            newsLink.href = `NewsItem.html?id=${newsItem.id}`;
            newsLink.textContent = newsItem.title;

            listItem.appendChild(newsLink);
            newsList.appendChild(listItem);
        });
    }

    newsCountSelect.addEventListener('change', fetchNews);

    fetchNews();
});
