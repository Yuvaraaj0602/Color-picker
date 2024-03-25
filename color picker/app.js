
document.getElementById('colorPicker').addEventListener('input', ()=>{
    document.getElementById('colorDisplay').style.backgroundColor = this.value;
    document.getElementById('colorDisplay').innerHTML = this.value;
});
