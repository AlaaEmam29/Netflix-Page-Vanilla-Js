"use strict"
const tabsBtn = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tabs-list");
const tabsContent = document.querySelectorAll(".tab-content");
tabsContainer.addEventListener("click",function(e) {
    const id = e.target.dataset.id;
    if(id)
    {
 
        tabsBtn.forEach((btn)=>{
            btn.classList.remove("tab-border");
            e.target.classList.add("tab-border");
 
        }) 
        tabsContent.forEach((content)=>{
            content.classList.add("hidden");
        })
        const element = document.getElementById(id)
        element.classList.remove("hidden");
    }    
   
})