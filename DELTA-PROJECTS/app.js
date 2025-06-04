let h1=document.querySelector('h1');
let div=document.getElementById("a");
let div4=document.getElementById("b");
let div8=document.getElementById("c");
let div10=document.getElementById("d");
let div12=document.getElementById("e");
let body=document.querySelector('body');
let stack=[];
let topscore=0;
let removeobj=function(){
    let imall=document.querySelectorAll('img');
    for(k of imall){
        k.remove();
    }
    let divsmall=document.querySelectorAll('#a h1');
    for (n of divsmall){
        n.remove();
    }
};
let setmaker=(arr)=>{
    let finalarr=[];
    let n=arr.length;
    for(let i=0;i<n;i++){
        ransel(arr,finalarr)
    }
    return finalarr;
};
let ransel=(list,narr)=>{
    let n=Math.floor(Math.random()*list.length);
    narr.push(list[n]);
    list.splice(n,1);
};
async function poke(num){
    div.style.backgroundColor="#EEEDE7a1"
    removeobj();
    let score=2000;
    if(num==4){
        div.style.gridTemplateRows="repeat(1,1fr)";
        div.style.gridTemplateColumns=`repeat(4,1fr)`;
    }
    else{
        div.style.gridTemplateRows="repeat(2,1fr)";
        div.style.gridTemplateColumns=`repeat(${num/2},1fr)`;
    }
    let ran= Math.ceil(Math.random()*100);
    let dat= await axios.get("https://api.tcgdex.net/v2/en/sets/base1");
    arr=[];
    for(let m=0;m<num;m++){
        arr.push(m);
    }
    let shuffledarr=setmaker(arr);
    console.log(shuffledarr);
    for (let i=ran;i<ran+num;i++){
        let im=document.createElement('img');
        div.append(im);
    }
    imall=document.querySelectorAll('img');
    let savenamearr=[];
    let countarr=[];
    let crosschecker=[];
    for(let j=0;j<shuffledarr.length;j=j+2){
        imall[shuffledarr[j]].src="assets/poke.jpg";
        imall[shuffledarr[j+1]].src="assets/poke.jpg";
        imall[shuffledarr[j]].addEventListener("click",()=>{
            imall[shuffledarr[j]].classList.add("turn");
            imall[shuffledarr[j]].src=dat.data.cards[ran+j].image+"/high.webp";
            savenamearr.push(dat.data.cards[ran+j].name);
            countarr.push(shuffledarr[j]);
            crosschecker.push(shuffledarr[j+1]);
            let c=cardlogicchecker(savenamearr,countarr,crosschecker,imall,num,score);
            if (c==0){
                score-=100;
            }
            console.log(score);
        });
        imall[shuffledarr[j+1]].addEventListener("click",()=>{
            imall[shuffledarr[j+1]].classList.add("turn");
            imall[shuffledarr[j+1]].src=dat.data.cards[ran+j].image+"/high.webp";
            savenamearr.push(dat.data.cards[ran+j].name);
            countarr.push(shuffledarr[j+1]);
            crosschecker.push(shuffledarr[j]);
            let c=cardlogicchecker(savenamearr,countarr,crosschecker,imall,num,score);
            if (c==0){
                score-=100;
            }
            console.log(score);
        });
    }
};
div4.addEventListener("click",()=>{
    poke(4);
});
div8.addEventListener("click",()=>{
    poke(8);
});
div10.addEventListener("click",()=>{
    poke(10);
});
div12.addEventListener("click",()=>{
    poke(12);
});
let cardlogicchecker=(arr1,arr2,arr3,imall,num,score)=>{
    if (arr1.length==2){
        console.log("PRESSED 2");
        console.log(arr1,arr2);
    if(arr1[1]==arr1[0] ){
        if(arr2[1]==arr3[0]){
            console.log("Same");
        setTimeout(function(){
        imall[arr2[0]].style.opacity="0";
        imall[arr2[1]].style.opacity="0";
        stack.push(1);
        if(stack.length==num/2){
            console.log("Game ended");
            stack.length=0;
            if(score>topscore){
                topscore=score;
            }
            let divsmall=document.createElement('h1');
            divsmall.innerText=`YOUR SCORE IS ${score}
            TOP SCORE IS ${topscore}`;
            divsmall.classList.add("size");
            div.append(divsmall);
            let imall=document.querySelectorAll('img');
            for(k of imall){
            k.remove();
            }
        }
        arr1.length=0;
        arr2.length=0;
        arr3.length=0;
    },1000);
        }
        else{
            console.log("Exceptional case")
            arr1.length=1;
            arr2.length=1;
            console.log(arr1,arr2);
        }
    }
    else{
        setTimeout(function(){
        imall[arr2[1]].src="assets/poke.jpg";
        imall[arr2[0]].src="assets/poke.jpg";
        arr1.length=0;
        arr2.length=0;
        arr3.length=0;
    },1000);
    return 0;
    } 
}
}
setInterval(()=>{
    let a=Math.floor(Math.random()*5)+1;
    body.style.backgroundImage=`url("assets/a${a}.jpg")`;
    console.log("set");
},10000);