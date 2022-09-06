const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_val = document.getElementById('hex');
const copy = document.getElementById('hexCopy');

body.style.background = '#000000';
hex_val.innerHTML = '#000000';

btn.addEventListener('click', () => {
    let hex_key = '#';
    for (let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_val.innerHTML = hex_key;
    document.getElementById('myHex').value = hex_key;
    body.style.background = hex_key;
    body.style.transition = '1.8s';
});

copy.addEventListener('click', () => {
    let hex = document.getElementById('myHex');

    hex.select();
    hex.setSelectionRange(0, 99999);

    navigator.clipboard.write(hex.value);
    console.log(hex.value);
    alert('Hex color value has been copied (Please check your nav console) :' + ' ' + hex.value);
})