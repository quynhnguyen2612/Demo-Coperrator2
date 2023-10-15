function medium(){
    let physics= document.getElementById('physics').value;
    let chemistry= document.getElementById('chemistry').value;
    let biology= document.getElementById('biology').value;
    document.getElementById('result').innerHTML = (physics+chemistry+biology)/3;
}

function sum(){
    let physics= document.getElementById('physics').value;
    let chemistry= document.getElementById('chemistry').value;
    let biology= document.getElementById('biology').value;
    document.getElementById('result').innerHTML = physics+chemistry+biology;
}