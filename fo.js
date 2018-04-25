const input = document.querySelector('input');
const fotos = document.querySelector('#fotos');
input.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',function(e){
        fotos.src = e.target.result;
    });
    reader.readAsDataURL(input.files[0]);
});                                    