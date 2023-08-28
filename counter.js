let counterElement=document.getElementById("countervalue");

function ondec(){
    let prev=counterElement.textContent;
    let updvalue=parseInt(prev)-1;
    counterElement.textContent=updvalue;
    if (updvalue<0){
        counterElement.style.color="red";
    }
    else if(updvalue>0){
        counterElement.style.color="green";
    }
    else{
        counterElement.style.color="black";
    }
}

function onrest(){
    counterElement.textContent=0;
    counterElement.style.color="black";
}

function oninc(){
    let prev=counterElement.textContent;
    let updvalue=parseInt(prev)+1;
    counterElement.textContent=updvalue;
    if (updvalue<0){
        counterElement.style.color="red";
    }
    else if(updvalue>0){
        counterElement.style.color="green";
    }
    else{
        counterElement.style.color="black";
    }
}