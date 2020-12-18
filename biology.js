let $modal = document.getElementsByClassName("modal");

for(i=1;i<=$modal.length;i++){
let $modal = document.getElementsByClassName("modal"+[i])[0];
let $item= document.getElementsByClassName("item"+[i])[0];

$item.addEventListener("click",function(){
    $modal.style.display = "block";
})

let $closeBtn = document.getElementsByClassName("closeBtn"+[i])[0];
$closeBtn.addEventListener("click",function(){
        $modal.style.display = "none";
    })

window.addEventListener("click",(e)=>{
    if(e.target == $modal){
        $modal.style.display = "none";
    }
})
}

