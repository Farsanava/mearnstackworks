// alert("hello World")
// var litems=document.getElementsByTagName("li") // selected all list items
var litems=document.querySelectorAll(".section") // selected all list items
for(let item of litems){
    item.style.color="red";
}