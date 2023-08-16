// const h =document.getElementById("parent-one");
// // h.style.color="red"
// h1.style.fontSize="50px"

// console.log(h1);
// h1.innerText="mahmudul"


// const alltags =document.getElementsByClassName("item");
// // console.log(alltag)

// for (let item of alltags){

// item.style.color="green"
// item.style.backgroundColor="red"
// }

// const mytag =document.getElementsByTagName("li");
// // console.log(mytag)
// for(let i=0;i<mytag.length;i++){
//   // console.log(mytag[i])
//   let element = mytag[i]

//   element.style.color="blue"
// }

// const h1 = document.querySelector("#parent-one")
// console.log(h1);
// const li = document.querySelector(".item")
// console.log(li);

// const li = document.querySelectorAll("h3")
// // console.log(li);
// for (let item of li){
//   console.log(item)

//   item.style.color="green"
// }

// --------node------

// const parent = document.querySelector(".grandparent")

// const p = parent.children;
// console.log(p[1].children)

// perent to child-----

// const gp=document.querySelector(".grandparent");
// const cl =gp.querySelectorAll(".item");
// console.log(cl)


     // child to perent-------
// const children =document.querySelector(".item");
// const perent =children.parentElement;
// console.log(perent);

// cl to gp-------

// const children =document.querySelector(".item");

// const gp = children.closest(".grandparent");
// console.log(gp)

// siblinks--------

// const parent1=document.getElementById("parent-one")
// const chaca=parent1.nextElementSibling;
// console.log(chaca)

// create element------

// const h = document.createElement("h3")

// h.innerText="made"
// const container =document.querySelector(".grandparent")

// container.appendChild(h);
// // console.log(h)
// multilin html------

//  const container =document.querySelector(".grandparent")

//  const div =document.createElement("div");

//  div.innerHTML=`
//  <h1>hello</h1>
//  <h1>hello</h1>
//  `

// container.appendChild(div);

// document.getElementById("remove-item").remove();