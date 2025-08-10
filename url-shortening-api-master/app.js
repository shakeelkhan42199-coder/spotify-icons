let inputLinkBox=document.querySelector('#input-link')
let tinyUrlApiKey="3JwONqJXASFCnrbNGWDtAg6QaaQkRx3YAteEAw98aUMUpgc77TKKqvuNuqTk";
let history=document.querySelector('.history');
let count=1;
let retriever=1;

let shortenBtn=document.querySelector('#shorten-btn')

function saveToHistory(url){
    
    localStorage.setItem(`${count}`,url);
    console.log(localStorage);
    count++;
}

function createCopyBtn(url,box){
    let copy=document.createElement('button');
    copy.innerHTML='<i class="fa-solid fa-copy"></i>';
    copy.classList.add('copy-btn');
    copy.onclick=()=>{copyToClipboard(url)}
    box.append(copy);
}

function createLinkText(link,box){
    let linkbox=document.createElement('a');
    linkbox.innerText=link;
    
    
    linkbox.setAttribute('href',link)
    linkbox.setAttribute('target','_blank')
    box.append(linkbox);
}



function retrieveHistory(){
    for(let i=0;i<localStorage.length;i++)
    {
        
        
        let item=localStorage.getItem(`${count}`);
        if(item==null)
            break;
        let box=document.createElement('div');
        createLinkText(item,box);
            
        createCopyBtn(item,box)
        box.setAttribute('class','history-anchors')
        count++;
        history.prepend(box);

    }
        
}
retrieveHistory();

function geturl(){
    let longUrl=inputLinkBox.value;
    longUrl=longUrl.trim();
    return longUrl;
}
async function shorturl(link) {
    try{

        let request=await fetch('https://api.tinyurl.com/create',{
            method:'POST',
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tinyUrlApiKey}`
            },
            body:JSON.stringify({
                url:link,
            })
        });
        data=await request.json();
        
        return data.data.tiny_url;
    }
    catch(e){
        console.log(e);
    }
}



async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
    console.log("Text Copied Successfully")
    await showVerify();
}

async function showVerify() {
    let verify=document.createElement('div')
    verify.innerText="Text Copied To Clipboard";
    verify.classList.add("verify")
    document.querySelector('body').append(verify);
    setTimeout(()=>{
        verify.remove();

    },4000)
}



shortenBtn.addEventListener('click',async function(){
    let urlEnter=geturl();
    inputLinkBox.classList.remove('wrong')
    if(urlEnter!=''|| urlEnter!=" ")
    {
        shorten=await shorturl(urlEnter);
        if(shorten)
       {
            let box=document.createElement('div');
            
            createLinkText(shorten,box);
            
            createCopyBtn(shorten,box)
            box.setAttribute('class','history-anchors')
            removeExcesshistory();
            saveToHistory(shorten);
            history.prepend(box);

        }
        else{
            inputLinkBox.classList.add('wrong')
        }
    }
})

function removeExcesshistory(){
    if(history.childElementCount==6)
    {

        history.children[history.children.length-1].remove();
        count--
    }
    if(localStorage.length>6)
    {
        localStorage.removeItem(`${localStorage.length}`)
        count--;
        removeExcesshistory();

    }
        
}

let menu=document.querySelector('#home')

let mobMenu=document.querySelector('.mob-view')
let open=false;
menu.addEventListener('click',function(){
    if(!open){
        mobMenu.classList.add('visible-menu');
        open=true;
    }
    else{
        mobMenu.classList.remove('visible-menu');

        open=false
    }
})