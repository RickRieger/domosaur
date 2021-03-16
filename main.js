document.querySelector(`.mess-with-me`).style.fontSize = '40px';

document.querySelector(`p.mess-with-me`).style.backgroundColor = 'green';

document.querySelector('#hide-me').style.display = 'none';

document.querySelector('#triceratops').style.width = '324px';



document.querySelector('.mess-with-me').addEventListener("click", changeFontToOrange);
function changeFontToOrange(){
    document.querySelector('.mess-with-me').style.color = 'orange';
}      



document.querySelector('#biggify').addEventListener("mouseover", changeDinoWidth);
function changeDinoWidth(){
    document.querySelector('#biggify').style.width = '200px';
}  

document.querySelector('#biggify').addEventListener("mouseout", changeDinoWidth2);
function changeDinoWidth2(){
    document.querySelector('#biggify').style.width = '162px';
}  



//toggle color
const button = document.querySelector('button')

button.addEventListener('click', function() {

    const color = document.querySelector('#row');
    if(color.style.backgroundColor === 'red'){
        color.style.backgroundColor = 'black'
    }
    else{
        color.style.backgroundColor = 'red'
    }    
});



 

