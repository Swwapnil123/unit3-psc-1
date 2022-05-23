

let data=JSON.parse(localStorage.getItem("students")) || [];
let container=document.getElementById("container");

data.map(function(el){
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.image;
    let p=document.createElement("h1");
    p.innerText=el.name;
    let p1=document.createElement("h1");
    p1.innerText=el.courses;
    let p2=document.createElement("p");
    p2.innerText=el.unit;
    let p3=document.createElement("p");
    p3.innerText=el.batch;

    var p4 = document.createElement("button");
    p4.innerText = "Delete";
    p4.style.backgroundColor="red"
    p4.addEventListener("click", function () {
      event.target.parentNode.remove();

    });

    box.append(img,p,p1,p2,p3,p4)
    container.append(box);
})


