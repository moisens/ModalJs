//Get the modal element
let modal = document.getElementById('simpleModal');
//Get open modal button
let modalBtn = document.getElementById('modalBtn');
//Get the close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];


//Listen for click
modalBtn.addEventListener('click', openModal);

function openModal(){
   modal.style.display = 'block';
}

//Listen to the close button
closeBtn.addEventListener('click', closeModal);
function closeModal(){
   modal.style.display = 'none';
}

//Listen for click outside
window.addEventListener('click', closeByClickWindow);
function closeByClickWindow(e){
   if(e.target === modal){
      modal.style.display = 'none';
   }
}