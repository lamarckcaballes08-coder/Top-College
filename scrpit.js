function toggleCard(card){

let desc = card.querySelector(".description");

if(desc.style.display === "block"){
desc.style.display = "none";
}
else{
desc.style.display = "block";
}

}

function rate(event,star){

event.stopPropagation();

let stars = star.parentElement.children;

for(let i=0;i<stars.length;i++){

stars[i].style.opacity="0.3";

}

for(let i=0;i<=Array.from(stars).indexOf(star);i++){

stars[i].style.opacity="1";

}

}

function searchCollege(){

let input = document.getElementById("searchBar").value.toLowerCase();

let cards = document.getElementsByClassName("college-card");

for(let i=0;i<cards.length;i++){

let title = cards[i].innerText.toLowerCase();

if(title.includes(input)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

function toggleMode(){

document.body.classList.toggle("light");

}