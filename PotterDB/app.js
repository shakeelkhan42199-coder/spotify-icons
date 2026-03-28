let url = "https://api.potterdb.com";

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener('click',async ()=>{
    let res = inp.value;
    const url2 = url+res;
    let str = await fetch(url2);
    let con =  await str.json();
    console.log(con.data);
    for (let arr of con.data) {
        console.log(arr);
    }
    inp.value = "";
});
