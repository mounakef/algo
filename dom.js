let hearts= document.getElementsByClassName('fa-heart')
console.log(hearts)
for (const heart of hearts) {
    console.log(heart.classlist)
    heart.addEventListener("click",function () {

        heart.classList.toggle("isactive")
    })

}


  let count = 1;
let countEl = document.getElementById("count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }  
}
//delete product
function removeProduct() {
  let sup = document.getElementById("delete");
  sup.remove();
}
