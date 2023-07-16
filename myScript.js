function addCard(){

   
   var dynamicCard= document.querySelector(".dynamic-card");
   var beforeDiv=document.querySelector(".add-new-icon");


   var title = prompt("Enter Title");
   var description = prompt("Write Description");
   var listItem1 =  prompt("Write List Item 1");
   var listItem2 =  prompt("Write List Item 2");

   var card = document.createElement("div");
   card.classList.add("dynamic-card-style");
   card.innerHTML = `
        <span class="material-symbols-rounded">
            star
        </span>

      
        <h3 style="color:white; font-size:30px">${title}</h3>
       

    
        <p style="color:lightgray; font-size:20px">${description}</p>
    
        <ul style="color:lightgray; font-size:15px">
            <li>${listItem1}</li>
            <li>${listItem2}</li>
        </ul>
      
   `;
   dynamicCard.insertBefore(card, beforeDiv);
}