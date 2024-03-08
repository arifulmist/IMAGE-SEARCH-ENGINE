const asskey="fGD94EUlV7mFbERBaWKgd-K5jYtCdFIJMRMy8HCwwk4";
const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const searchresult=document.getElementById("search-result");
const searchmorebtn=document.getElementById("show-more-btn");


 let keyword="";
 let page=1;
 async function searchimage(){
  keyword=searchbox.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&&client_id=${asskey}&&per_page=12`;
  const respons=await fetch(url);
  const data=await respons.json();
  if(page==1)
  {
    searchresult.innerHTML="";
  }
const results=data.results;

results.map((result)=>{
const image=document.createElement("img");
 image.src=result.urls.small;
 const imagelink=document.createElement("a");
 imagelink.href=result.links.html;
 imagelink.target="_blank";
 imagelink.appendChild(image);
 searchresult.appendChild(imagelink);
})
searchmorebtn.style.display="block";
 }


 searchform.addEventListener("submit",(e)=>{
   e.preventDefault();
   page=1;
   searchimage();
 })

 searchmorebtn.addEventListener("click",()=>{
  page++;
  searchimage();
 })