

thanking = document.querySelector('body .thanking');

function showing(){
    thanking.style.display = 'flex'
}


lists = document.querySelectorAll('li')
rateNumber = document.querySelector('.rate-number');


for(let i=0; i<lists.length;i++){
    lists[i].addEventListener('click',function(event) {
        for (const li of document.querySelectorAll("li.active")) {
          li.classList.remove("active");
        }
        event.currentTarget.classList.add("active");


        active = document.querySelector('.active')
        ratingNumber = document.querySelector('.rate-number')

        ratingNumber.innerHTML = active.innerHTML

        
        
        
      })

    
  
}





