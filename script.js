let headlines=document.getElementById('headlines')
let business=document.getElementById('business')


let fetchheadlines = async function() {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8c4d6242923f4469b74458050f6993ba');
    let data = await result.json()
    displayheadlines(data.articles);
}

fetchheadlines();

let displayheadlines = (data) => {
    console.log(data)
    data.forEach(element => {
        let subdiv=document.createElement('div')
        subdiv.style.backgroundImage =`url(${element.urlToImage})`
        subdiv.innerHTML =`<p>${element.title}</p>`
        headlines.appendChild(subdiv)
    });
    }

    let fetchbusiness=async function(){
        let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8c4d6242923f4469b74458050f6993ba');
        let data = await result.json()
        displaybusiness(data.articles)
    }

    fetchbusiness();

    let displaybusiness=(data) => {
        data.forEach(ele => {
            for (let key in ele) {
                if (ele[key] === null) {
                    ele[key] = `${key} Will be updated soon.`;
                }
            }
            let subdiv=document.createElement('div');
            subdiv.innerHTML=`<h2>${ele.source.name}</h2>
            <h4>${ele.title}</h4>
            <img src=${ele.urlToImage}>
            <p>${ele.description}</p>
            <a href=${ele.url} target='_blank'><button> Want to explore more about this news? </button></a>`
            business.appendChild(subdiv)
        });
    }


    let fetchent = async function(){
        let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8c4d6242923f4469b74458050f6993ba');
        let data = await result.json()
        displayent(data.articles)
    }

    fetchent();

    let displayent=(data) => {
        data.forEach(ele => {
            for(let key in ele){
                if(ele[key]===null){
                    ele[key]=`${key} Will be updated soon.`
                }
            }
            let subdiv=document.createElement('div');
            subdiv.innerHTML=`<h2>${ele.source.name}</h2>
            <h4>${ele.title}</h4>
            <img src=${ele.urlToImage}>
            <p>${ele.description}</p>
            <a href=${ele.url} target='_blank'><button> Want to explore more about this news? </button></a>`
            ent.appendChild(subdiv)
        });
    }

    let fetchhealth = async function() {
        let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8c4d6242923f4469b74458050f6993ba');
        let data = await result.json()
        displayhealth(data.articles)
    }

    fetchhealth();

    let displayhealth = (data) => {
        data.forEach(ele => {
            for(let key in ele){
                if(ele[key]===null){
                    ele[key]=`${key} Will be updated soon.`
                }
            }
            let subdiv=document.createElement('div');
            subdiv.innerHTML=`<h2>${ele.source.name}</h2>
            <h4>${ele.title}</h4>
            <img src=${ele.urlToImage}>
            <p>${ele.description}</p>
            <a href=${ele.url} target='_blank'><button> Want to explore more about this news? </button></a>`
            health.appendChild(subdiv)
        });
    }

    
    let fetchscience = async function() {
        let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8c4d6242923f4469b74458050f6993ba');
        let data = await result.json()
        displayscience(data.articles)
    }

    fetchscience();

    let displayscience = (data) => {
        data.forEach(ele => {
            for(let key in ele){
                if(ele[key]===null){
                    ele[key]=`${key} Will be updated soon.`
                }
            }
            let subdiv=document.createElement('div');
            subdiv.innerHTML=`<h2>${ele.source.name}</h2>
            <h4>${ele.title}</h4>
            <img src=${ele.urlToImage}>
            <p>${ele.description}</p>
            <a href=${ele.url} target='_blank'><button> Want to explore more about this news? </button></a>`
            science.appendChild(subdiv)
        });
    }

    let fetchsports = async function() {
        let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8c4d6242923f4469b74458050f6993ba');
        let data = await result.json()
        displaysports(data.articles)
    }

    fetchsports();

    let displaysports = (data) => {
        data.forEach(ele => {
            for(let key in ele){
                if(ele[key]===null){
                    ele[key]=`${key} Will be updated soon.`
                }
            }
            let subdiv=document.createElement('div');
            subdiv.innerHTML=`<h2>${ele.source.name}</h2>
            <h4>${ele.title}</h4>
            <img src=${ele.urlToImage}>
            <p>${ele.description}</p>
            <a href=${ele.url} target='_blank'><button>Want to explore more about this news? </button></a>`
            sports.appendChild(subdiv)
        });
    }

    let fetchtech = async function() {
        let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8c4d6242923f4469b74458050f6993ba');
        let data = await result.json()
        displaytech(data.articles)
    }

    fetchtech();

    let displaytech = (data) => {
        data.forEach(ele => {
            for(let key in ele){
                if(ele[key]===null){
                    ele[key]=`${key} Will be updated soon.`
                }
            }
            let subdiv=document.createElement('div');
            subdiv.innerHTML=`<h2>${ele.source.name}</h2>
            <h4>${ele.title}</h4>
            <img src=${ele.urlToImage}>
            <p>${ele.description}</p>
            <a href=${ele.url} target='_blank'><button> Want to explore more about this news? </button></a>`
            tech.appendChild(subdiv)
        });
    }
