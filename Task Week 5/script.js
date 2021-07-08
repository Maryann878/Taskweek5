const meter = document.getElementById('form');
form.addEventListener("input", meterConverter)



function meterConverter(e) {
    let meterC = e.target.value;
    // console.log(meterC)
    document.getElementById('meters').value = meterC * 1;
    document.getElementById('inches').value = meterC * 39.3701;
    document.getElementById('feet').value = meterC * 3.28084;
    document.getElementById('yards').value = meterC * 1.0936133
}


const inches = document.getElementById('inches');
inches.addEventListener("input", inchesConverter)
function inchesConverter(i){
    let meterC = i.target.value;
    document.getElementById('meters').value = meterC / 39.37;
    document.getElementById('inches').value = meterC * 1;
    document.getElementById('feet').value = meterC /12;
    document.getElementById('yards').value = meterC /36

}

const feet = document.getElementById('feet');
feet.addEventListener("input", feetConverter)
function feetConverter(){
    let meterC = f.target.value;
    document.getElementById('meters').value = meterC / 3.281;
    document.getElementById('inches').value = meterC * 2;
    document.getElementById('feet').value = meterC *1;
    document.getElementById('yards').value = meterC /3

}




const yards = document.getElementById('yards');
yards.addEventListener("input", yardConverter)

function yardConverter(y){
    let meterC = y.target.value;
    document.getElementById('meters').value = meterC / 1.094;
    document.getElementById('inches').value = meterC * 36;
    document.getElementById('feet').value = meterC * 3;
    document.getElementById('yards').value = meterC * 1;
}





const resetBtn = document.getElementById('meters');
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('meters').value = resetBtn.innerHTML;
    document.getElementById('inches').value = resetBtn.innerHTML;
    document.getElementById('feet').value = resetBtn.innerHTML;
    document.getElementById('yards').value = resetBtn.innerHTML;
})