//75f36160adc54de7a9c698db134b00fd
var api_key = '75f36160adc54de7a9c698db134b00fd';
var baseURL = 'https://newsapi.org/v2'
var ResultsElement = document.querySelector('.results')
var ModalTitle = document.querySelector('.modal-title')

// fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apiKey=${api_key}`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
//     data.articles.forEach(news=>{
//         console.log(news.content)
//     })
// })

async function getAllNews(){
    let res = await fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apiKey=${api_key}`)
    return res.json()
}
getAllNews()
.then(result=>{
    console.log(result);
    result.articles.map((news,index)=>{
        // console.log(news.title)
        let NewsLink = `<a href="${news.url}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" target="_blank" data-id="${index}">${news.title}</a><br>`;
        console.log(NewsLink);
        ResultsElement.innerHTML += NewsLink;
    })
    document.querySelectorAll('a').forEach(link=>{
        // console.log(link);
        link.addEventListener('click',(event)=>{
            console.log(event.target.getAttribute('data-id'))
        })
    })
})