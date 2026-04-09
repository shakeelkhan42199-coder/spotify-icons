let url = "http://universities.hipolabs.com/search?country=india";

let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
    let state = document.querySelector("input").value;
    let colArr = await getCollege(state);
    show(colArr);
})
function show(colArr){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(col of colArr){
        let li = document.createElement("li");
        list.appendChild(li);
        li.innerText = col.name;
    }
}
async function getCollege(state) {
    try{
        let res = await axios.get(url);
        let filtered = res.data.filter(col => 
            col["state-province"] && 
            col["state-province"].toLowerCase().includes(state.toLowerCase())
        );
       return filtered;
    }catch(e){
        console.log(e);
        return [];
    }
}