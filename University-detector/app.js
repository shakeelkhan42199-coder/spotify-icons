// let h1=document.querySelector('h1');
// let p=document.querySelector('p');
// let btn=document.querySelector("button");
// let img=document.querySelector("img");
// btn.addEventListener('click',async()=>{
//     let randImg=await getFact();
//     console.log(randImg)
//     img.setAttribute("src",randImg)
// })


// // let fact = "https://catfact.ninja/fact?max_length=110";//
// let fact="https://dog.ceo/api/breeds/image/random"
// async function getFact(){
//     try{
//         let res=await axios(fact)
//         return res.data.message
//     }
//     catch(er){
//         let noData="noData";
//         return noData

//     }
    
    
// };

// getFact()



// let fact="https://icanhazdadjoke.com/";

// async function getData(){
//     try{
//         const config={headers:{Accept:"application/json"}}
//         let res=await axios.get(fact,config)
//         console.log(res.data.joke)
//     }
//     catch(er){
//         console.log(er);
//     }
// }

// getData()



//Univercityu detector

let inp=document.querySelector("input");
let inpState=document.querySelector("#inp_state");
let btn=document.querySelector("button");
let li=document.querySelector("#list");

let url="http://universities.hipolabs.com/search?country=";

btn.addEventListener('click',async()=>{
    let cunName=inp.value;
    let stateName=inpState.value;
    let res2=await getUnivercity(cunName,stateName);


    // console.log(res2)
    // console.log(stateName)
    
    listName(res2)


})



async function getUnivercity(cunName,stateName){
    try{

        let jointUrl=url+cunName+"&name="+stateName;
        let res=await axios.get(jointUrl);

        // console.log(jointUrl)
        // console.log(url)
        // console.log(res)
        return res.data

    }
    catch(er){
        return er
    }
    
};

// console.log(getUnivercity("india","jharkhand"))

function listName(arry){
    li.innerText="";
    for(let i=0;i<arry.length;i++){
        let list=document.createElement("li");
        list.innerText=arry[i].name
        li.appendChild(list)
    }
};














// fetch(fact)
    // .then((result) => {
    //     console.log(result);
    //     return result.json()

    // })
    // .then((data) => {
    //     console.log("data1:",data.fact)
    //     return fetch(fact)
    // })
    // .then((res) => {
    //     return res.json()

    // })
    // .then((data) => {
    //     console.log("data 2:", data.fact)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })