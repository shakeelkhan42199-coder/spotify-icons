let button =document.querySelector("button")

let div=document.querySelector("div");
let c=0;
button.addEventListener('click',()=>{
    c++;
    if(c==2)
        {
           let alldot=Array.from(document.getElementsByClassName("dot"))

           for(let i=0;i<alldot.length;i++)
           {
            alldot[i].remove();
           }

           c=1;
        }
let m=Math.floor(Math.random()*(6-1+1)+1);
 console.log("r"+m)
div.classList.add("rotate")
setTimeout(() => {
    div.classList.remove("rotate")
    
}, 1000);
let i=1;
while(i<=m){
    
    let dot=document.createElement("div");
    dot.setAttribute("class","d")
   
    dot.classList.add("dot")
    div.appendChild(dot);
    console.log("d"+i);
     
    i++;
}




console.log(c);



})