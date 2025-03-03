//  body color change body 
function fullBodyColorChange(){
    const numbers = '0123456789ABCDEFGHIJKLMNOPQRST';
    let ChangeColor =' #';
    for (let i = 0; i < 6; i++) {
      ChangeColor += numbers[Math.floor(Math.random() * 12)];
    }
    return ChangeColor;
  }
  document.getElementById('changeColorBodyBtn').addEventListener('click' , function(){
    const bodyColor = document.getElementById('bodyColor') ;
      bodyColor.style.backgroundColor = fullBodyColorChange();
          // console.log('this color code number : ' , fullBodyColorChange())
  })
  
  // big button worke
  const clickButton = document.getElementById('big-button')
  clickButton.addEventListener('click' , function(){
             window.location.href = "../main.html"
  
  
  });
  // number cromonnoi big 
  const addTextmsg = [];
  const addNumber = 0;
  
  const completeButtons = document.querySelectorAll(".complete-button")
  for(let btn of completeButtons){
     btn.addEventListener('click' , function(event){
      const amount = event.target.innerText === "+" ? 1 : -1;
      const mainNumber = document.getElementById('main-number');
      const navberNumber = document.getElementById('navbar-number');
      const currentMainNumber = parseInt(mainNumber.innerText);
      const currenNavberNumvber = parseInt(navberNumber.innerText);
      const newMainNumber = Math.max(0 , currentMainNumber + amount );
         const  newNavberNumber = Math.max(0 , currenNavberNumvber - amount);
          navberNumber.innerText = newNavberNumber;
      mainNumber.innerText = newMainNumber;
      // text section
        
         
        let commitTexts = document.getElementById('hidden-display');
        const div = document.createElement("div");
        div.style.marginBottom = "5px"
        div.innerHTML = `
        <p class"p-10"> you have completed the task Fix Mobile Button Issue at 1:32:34 Am  </P>
        
        `
       commitTexts.appendChild(div)
          
       console.log(commitTexts.innerText)  
      for (let s = 0; s < completeButtons.length; s++) {
        const clickbtn2 = completeButtons[s]
          if(clickbtn2.id  === event.target.id){
                clickbtn2.style.backgroundColor = "#a0a2b4"
                alert("Board updated successfully")
                
                commitTexts.innerText = commitTexts.innerText
          }    
        else{
          
          clickbtn2.style.backgroundColor = "#3752FD"
        }
      }
            
          
           
         
   
  
        
    
     });
  }

  
//
//  comment text  section
const addtexts = document.getElementById('completed-A').addEventListener('click' , function(){
    const a = document.getElementById("A")
            
  }) 


 


// clear history  deleted
document.getElementById('History-clear').addEventListener('click' , function(){
 document.getElementById('hidden-display').style.display = 'none'
})