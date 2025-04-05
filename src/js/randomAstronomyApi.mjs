
export function templateStringLiteralAstronomy(data) {
	if(data.media_type = "video" && !data.url.includes(".jpg")){
		return  `<div><h1>${data.title}</h1><p>${data.date}</p><p>${data.explanation}</p><iframe id="video" width="420" height="315"
src="${data.url}" allowfullscreen>
</iframe><div/>`;
	}
	else{
	return `<div><h1>${data.title}</h1><p>${data.date}</p><p>${data.explanation}</p><a href="${data.hdurl}"><img class="astronomy-img" src="${data.url}" alt="${data.title}"></img><a/><div/>`;}
}