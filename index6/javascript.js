const item= document.getElementById("item")
function dark() {
if (item.innerHTML=="Rainbow2") {
document.body.style.background="linear-gradient(90deg, red, white, deeppink, yellow, green, red)"; item.innerHTML="Dark";}
else if (item.innerHTML=="Dark") {
document.body.style.background="black"; item.innerHTML="Light";}
else if (item.innerHTML=="Light") {
document.body.style.background="grey"; item.innerHTML="Rainbow";}
else {document.body.style.background="linear-gradient(90deg, black, orange, red, blue, orange, purple, blue, orange, deeppink, limegreen, orange, blue, purple, orange, blue, red, orange, black)"; item.innerHTML="Rainbow2";}
}