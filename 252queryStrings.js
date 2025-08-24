let url = "http://universities.hipolabs.com/search?country=";
// const axios = require("axios");
let btn = document.getElementById("search");
let inpCountry = document.getElementById("country");
let inpState = document.getElementById("state");
inpCountry.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    // let country = document.getElementById("country").value;
    searchUniversities();
  }
});
inpState.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    // let country = document.getElementById("country").value;
    searchUniversities();
  }
});
btn.addEventListener("click", async () => {
  searchUniversities();
});

async function getNames(url) {
  try {
    let result = await axios.get(url);
    return result.data;
  } catch (error) {
    return error;
  }
}

function show(names) {
  let list = document.getElementById("list");
  list.innerText = "";
  for (college of names) {
    let li = document.createElement("li");
    li.innerHTML = `<b>College :</b> ${college.name}, <b> State </b> : ${college["state-province"]}`;
    list.appendChild(li);
  }
}

async function searchUniversities(){
    let names = await getNames(url + inpCountry.value);
    if (inpState.value) {
      names = names.filter(
        (uni) =>
          uni["state-province"] &&
          uni["state-province"].toLowerCase() === inpState.value.toLowerCase()
      );
    }
    show(names);
}