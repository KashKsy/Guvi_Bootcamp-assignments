function countries(url){
    return new Promise((res, rej) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200)
      {
          res(xhr.responseText);
      }
      else if(this.readyState == 4 && this.status !== 200){
          rej("error occurred");
      }
    };
  xhr.send();
    });
}

let url = "https://restcountries.eu/rest/v2/all";

countries(url)
.then((response) => {
    var a = JSON.parse(response);
   a.forEach(e => {
       const  card = document.createElement("div");
       card.setAttribute("class", "card");
       const container = document.createElement("div");
       const flags = document.createElement("img");
       flags.setAttribute("height", "80px");
       flags.setAttribute("width" , "140px");
       flags.src = e.flag;
       const h1 = document.createElement("h1");
       h1.textContent= e.name;
       let app = document.getElementById("root");
       app.appendChild(card);
       card.appendChild(flags);
       card.appendChild(h1);
       app.appendChild(container);
    //    console.log(e.flag);

   });
})
.catch((err) => console.error(err));

