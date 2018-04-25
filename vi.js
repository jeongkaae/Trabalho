const input = document.querySelector('input');
const videos = document.querySelector('#videos');
input.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',function(f){
        
        console.log(videos.src = f.target.result);
        videos.play();
    });
    reader.readAsDataURL(input.files[0]);
});                                    