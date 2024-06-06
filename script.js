let boxes = Array.from(document.getElementsByClassName("box"))
let msgCont = document.getElementsByClassName("msg-cont")[0] //
let newbtn = document.getElementById("newbtn")
let msg = document.getElementById("msg")

let resetbtn = document.getElementById("reset")


let turn0=true;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let c=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerHTML = "O" //turn of O
            turn0=false
        }
        else{
            box.innerHTML = "X"
            turn0=true
        }
        c++;
        console.log(c);
        //now here if we click on the box second time the value changes so we have to disable it
        box.disabled=true;
        checkWinner();

        if(c===9)
        {
            c=0;
            msg.innerText = "Draw 🥺";
            msgCont.classList.remove("hide");

        }
    });
});

const disableBoxes =()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText ="";
    }
}

const showwin = (ele)=>{
    
    msg.innerText = `Congratulations! Winner is ${ele} 🎉`
   
    msgCont.classList.remove("hide")
    disableBoxes();
    
    
}


    
       




const checkWinner = ()=>{
    for(let pattern of win)
    {  
       //to get the text inside the boxes innertext is used
        let p1= boxes[pattern[0]].innerText;
        let p2= boxes[pattern[1]].innerText;
        let p3= boxes[pattern[2]].innerText;
        //condition for winner
        if(p1 != "" && p2 != "" && p3 != "")
        {
            if(p1===p2 && p2===p3)
            {
                
               showwin(p1);
               c=0; // here we have written c=0 bcx if the winner is declared in 9th box then the condition of draw becomes true so because 
                    //of that even if the pattern is formed but it is giving draw msg.....so once the winner is declared reset the value of
                    //count to 0
            }
            
        
        }





       
        
    }
}

const reset = ()=>{
    turn0=true
    enableBoxes();
    msgCont.classList.add("hide")
    c=0;
    
}



resetbtn.addEventListener("click",reset)
newbtn.addEventListener("click",reset)