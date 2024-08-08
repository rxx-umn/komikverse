let itemID = localStorage.getItem("id");
let mangaTitle = localStorage.getItem("searched")
console.log(itemID);

const delayUni = 125;


setTimeout(function(){
    fetch('https://api.jikan.moe/v4/manga/'+itemID+'/full?limit=1', {
        method: "GET",
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        const manga = data.data;

            const poster0 = manga.images.jpg.image_url;
            const title0 = manga.title;
            const rating0 = manga.score;
            const story0 = manga.synopsis;
            const comicContainer = document.getElementById("information");

            const div1Div = document.createElement("div");
            const imgDiv = document.createElement("img");
            const h2Div = document.createElement("h2");
            const div2Div = document.createElement("div");
            const iDiv = document.createElement("i");
            const pDiv = document.createElement("p");

            div1Div.classList.add("comic-info");
            imgDiv.classList.add("comic-cover");
            h2Div.classList.add("comic-title");
            pDiv.classList.add("comic-descripton");
            iDiv.classList.add("fas");
            iDiv.classList.add("fa-star");
            imgDiv.src = poster0;
            imgDiv.alt = "Komik 8";
            h2Div.textContent = title0;
            div2Div.classList.add("rating");
            div2Div.textContent = rating0;
            pDiv.textContent = story0;

            div1Div.appendChild(imgDiv);
            div1Div.appendChild(h2Div);
            div1Div.appendChild(div2Div);
            div1Div.appendChild(iDiv);
            div1Div.appendChild(pDiv);
            comicContainer.appendChild(div1Div);

            console.log(div1Div);
            console.log(rating0);
            console.log(poster0);
            console.log(title0);
            console.log(story0);
    })
    .catch((error) => {
        console.log(error);
    });
}, delayUni);            

fetch('https://api.jikan.moe/v4/manga?q='+mangaTitle+'&type=manga&order_by=score&sort=desc&genres_exclude=12&sfw="true"', {
    method: "GET",
})
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    const values = [];
    const thing = data.data.slice(0, 30);

    thing.map((data)=>{
        const poster0 = data.images.jpg.image_url;
        const title0 = data.title;
        const rating0 = data.score;
        const id0 = data.mal_id;
        const comicContainer = document.getElementById("searchResults");
        const elementID = id0.toString();

        const div1Div = document.createElement("div");
        const imgDiv = document.createElement("img");
        const h3Div = document.createElement("h3");
        const div2Div = document.createElement("div");

        div1Div.classList.add("comic");
        imgDiv.src = poster0;
        imgDiv.alt = "Komik 8";
        h3Div.textContent = title0;
        div1Div.id = elementID;
        div2Div.classList.add("rating");
        div2Div.textContent = rating0;

        div1Div.appendChild(imgDiv);
        div1Div.appendChild(h3Div);
        div1Div.appendChild(div2Div);
        comicContainer.appendChild(div1Div);

        console.log(div1Div);
        console.log(rating0);
        console.log(poster0);
        console.log(title0);
        console.log(id0);
        console.log(values);

        div1Div.addEventListener("click", () => {
            const clickedElementID = div1Div.id;
            console.log(clickedElementID);
            localStorage.setItem("id", clickedElementID);
            console.log(localStorage);
            const delay=125;
            setTimeout(function(){
                window.location.href = "main.html";
            }, delay);            
          });
    })
})
.catch((error) => {
    console.log(error);
});
