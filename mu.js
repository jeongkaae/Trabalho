const input = document.querySelector('input');
const musicas = document.querySelector('#musicas');
input.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',function(g){
        musicas.src = g.target.result;
        musicas.play;
    });
    reader.readAsDataURL(input.files[0]);
});                                    