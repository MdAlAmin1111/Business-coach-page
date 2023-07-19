const button = document.querySelectorAll("button")[0];
let input1 = document.querySelectorAll("input")[0];
let key = 0;
let emailArray = [];
button.addEventListener("click", addFormData);
function addFormData(e){
    e.preventDefault();
    var emailData = document.getElementById("email1").value;
    emailArray[key++] = emailData;
    localStorage.setItem("Email", JSON.stringify(emailArray));
    
    input1.value='';
    alert("You have succesfully added a address");
}


// dynamic card section start

const dynamicCard = document.querySelector(".dynamic-card");
const beforeDiv = document.querySelector(".add-new-card-icon");
let cardDataArray = localStorage.getItem('cardDatas') ? JSON.parse(localStorage.getItem('cardDatas')) : [];

function addCard(){
   var title = '';
   var description = '';
   var listItem1='';
   var listItem2='';
   
    title = prompt("Enter Title");
    if((title != null) & (title !='')){
        description = prompt("Write Description");
        if((description != null) & (description !='')){
            listItem1 = prompt("Write List Item 1");
            if((listItem1 != null) & (listItem1 !='')){
                listItem2 = prompt("Write List Item 2");
                if((listItem2 != null) & (listItem2 !='')){
                    var objectElement = {
                         "title": title,
                         "description": description,
                         "item1": listItem1,
                         "item2": listItem2
                    }
                    // console.log(objectElement);
                    cardDataArray.push(objectElement);
                    localStorage.setItem('cardDatas', JSON.stringify(cardDataArray));
                    addTask(objectElement);
                }
                else{
                    alert("List item 2 is Mandatory");
                }
            }
            else{
                alert("List item 1 is Mandatory");
            }
        }
        else{
            alert("Description is Mandatory");
        }
    }
    else{
        alert("Title is Mandatory");
    }


}
cardDataArray.forEach(addTask);
function addTask(objectElement){
    var card = document.createElement("div");
    card.classList.add("dynamic-card-style");
    card.innerHTML = `
      <span class="material-symbols-rounded">
          star
      </span>            
      <h3 style="color:white; font-size:30px">${objectElement.title}</h3>
      <p style="color:lightgray; font-size:20px">${objectElement.description}</p>
      
      <ul style="color:lightgray; font-size:15px">
        <li>${objectElement.item1}</li>
        <li>${objectElement.item2}</li>
      </ul>
    `;
    dynamicCard.insertBefore(card, beforeDiv);
}