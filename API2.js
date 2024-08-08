fetch('https://api.jikan.moe/v4/manga?type=manga&order_by=scored_by&sort=desc&sfw=true', {
    method: "GET",
})
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    const values = [];
    const thing = data.data.slice(0, 35);

    thing.map((data)=>{
        const poster0 = data.images.jpg.image_url;
        const title0 = data.title;
        const rating0 = data.score;
        const id0 = data.mal_id;
        const comicContainer = document.getElementById("popularComicPage");
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

fetch('https://api.jikan.moe/v4/manga?type=manga&order_by=scored_by&status=publishing&sort=desc&sfw=true', {
    method: "GET",
})
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    const thing = data.data.slice(0, 35);

    thing.map((data)=>{
        const poster0 = data.images.jpg.image_url;
        const title0 = data.title;
        const rating0 = data.score;
        const id0 = data.mal_id;
        const comicContainer = document.getElementById("recentPage");

        const div1Div = document.createElement("div");
        const imgDiv = document.createElement("img");
        const h3Div = document.createElement("h3");
        const div2Div = document.createElement("div");
        const elementID = id0.toString();

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

