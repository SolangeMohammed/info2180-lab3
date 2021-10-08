window.onload = function(){
    document.getElementsByTagName("head");
    var blocKGrid = document.getElementById("board").childNodes;
    blocKGrid.forEach(element => {element.className = "square"}); 
}