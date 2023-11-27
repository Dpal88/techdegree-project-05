// Accesses the input element in the HTML document & 
document.getElementsByClassName('anchor').addEventListener("key up", inputFeild)
// 
function inputFeild() {
    let x = document.getElementsByClassName('anchor');
    x.value = x.value.toLowerCase();
}
//
