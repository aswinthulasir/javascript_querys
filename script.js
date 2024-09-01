var heading=document.getElementById('Helloo')
heading.style.color='red';
heading.style.fontSize='50px';
heading.style.marginLeft='40%';

var para=document.getElementById('par')
para.style.color='blue'
para.innerText='Hello JavaScript';
para.style.fontSize='34px';

var scr=document.getElementById('Scripting')
scr.innerHTML=`<b> Hello guys</b>`;
scr.style.color='green';

var cls=document.getElementsByClassName('impact')
console.log(cls)
cls[0].style.backgroundColor='brown';
cls[0].style.fontSize='22px'

var hyper=document.getElementsByTagName('h3')
hyper[0].style.fontSize='62px'
hyper[0].style.color='green'
hyper[1].style.color='yellow'
hyper[1].style.backgroundColor='green'
hyper[1].style.textAlign='center'
hyper[1].style.fontSize='54px'

var p1=document.querySelector('#newP');
p1.style.color='red';

var inp=document.querySelector('input[type="text"]');
inp.style.width='100%';
inp.value='Donot type';
inp.style.color='red';
inp.style.fontSize='24px'
inp.style.textAlign='center';


var sec_item=document.querySelector('.impact:nth-child(2)');
sec_item.style.color='blue'

//document.querySelector('#myInput').style.display = 'none';

function clickosky() {
    alert ('Why did you clicked the button?');
}

function mouse_over(){
    document.getElementById('newP').style.color='blue';
}
function mouse_leave(){
    document.getElementById('newP').style.color='red';
}

function key_press(event){
    console.log(event.target.value);
}

// var x=document.getElementById('myInput');
// x.addEventListener('keypress', function key_press(event)
// {
//     console.log(event.target.value)
// })

document.getElementById('myInput').addEventListener('keypress', function key_press(event){console.log(event.target.value)})