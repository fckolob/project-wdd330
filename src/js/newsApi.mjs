export function templateStringLiteralNews(data) {
    return `
        <a class= "news-link" href=${data.url}>
        <h2>${data.title}</h2>
        <img src="${data.image_url}" alt="${data.title}" class="news-img"></img>
        <p>Published: ${data.published_at}</p>
        <p>${data.summary}</p>
        </a>`;}