
window.onload = function(){
    let blocKGrid = document.querySelectorAll("#board div"); 
   
    var space =[];
    const winingCombo= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    const x_Button= 'X'
    const o_Button= 'O'
    let circleTurn 
    
    for(let i=0; i<blocKGrid.length; i++){
        blocKGrid[i].classList.add('square');
        blocKGrid[i].addEventListener('click', handleClick, {once: true})

        const restartGame = document.querySelector('.btn')

        restartGame.onclick = () =>{
            window.location.reload();
    
        }
    
    
    
    
        // restartGame.onclick= () =>{
        //     window.location.reload();
        // }
    
       
    
        function handleClick(e){
            const cells = e.target
            const currentClass = circleTurn ? cells.textContent= 'O' : cells.textContent='X'
            placeXO(cells, currentClass)
            circleTurn =! circleTurn 
    
            if(winner(blocKGrid, currentClass)){
                restartGame()
                winMsg.classList.add('you-won'); 
                console.log(winMsg)
    
            }
            console.log('button clicked')
            console.log(circleTurn)
        }
    
        
        function winner(blocKGrid, currentClass){
            const winMsg= document.getElementById("status"); 
            for(i=0; i<winingCombo.length; i++){
                if(blocKGrid[winingCombo[i][0]].innerHTML === currentClass && blocKGrid[winingCombo[i][0]].innerHTML === currentClass && blocKGrid[winingCombo[i][2]].innerHTML === currentClass){
                    winMsg.setAttribute("class", "you-won")
                    winMsg.innerHTML= "Congratulations!"  +currentClass+  "is the Winner!"
                    console.log(blocKGrid)
                    console.log(winingCombo)
                }
            }
    
         }  
    
        function placeXO(cells, currentClass)
        {
            cells.classList.add(currentClass)
        }

    }
          
    
    
    

    

    for(let i=0; i<blocKGrid.length; i++){
        blocKGrid[i].addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });
    
        blocKGrid[i].addEventListener('mouseout', function(e){
            e.target.classList.remove('hover');
        });
    
    }


    
}