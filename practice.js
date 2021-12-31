let usernameDOM = document.getElementById('username');
let dateDOM = document.getElementById('date');
let colorDOM = document.getElementById('color');
let textDOM = document.getElementById('text');
let timeDOM = document.getElementById('time');

usernameDOM.children[1].addEventListener('keyup',function () {
    let input = usernameDOM.children[1];
    if(input.value.length<6 || input.value.length>40 || !/^[A-Za-z0-9]+$/.test(input.value)){
        usernameDOM.classList.add('invalid');
        usernameDOM.classList.remove('valid');
    } else{
        usernameDOM.classList.add('valid');
        usernameDOM.classList.remove('invalid');
    }
})

dateDOM.children[1].addEventListener('change',function(){
    let selectedDate = new Date(dateDOM.children[1].value);
    let now = new Date();
    selectedDate.setHours(0);
    selectedDate.setMinutes(0);
    selectedDate.setSeconds(0);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if(selectedDate > now){
        dateDOM.classList.add('invalid');
        dateDOM.classList.remove('valid');
    } else{
        dateDOM.classList.add('valid');
        dateDOM.classList.remove('invalid');
    }
})

colorDOM.children[1].addEventListener('input',function(e){
    let selectedColor = e.target.value; 
    let selectDOM = document.getElementsByClassName('color');
    for(let i=0; i<selectDOM.length; i++){
        selectDOM[i].style.color = selectedColor;
    }
})

textDOM.children[2].innerText = 140;

textDOM.children[1].addEventListener('keyup',function(e){
    textDOM.children[2].innerText = 140-textDOM.children[1].value.length;
});

timeDOM.children[1].addEventListener('input',function(){
    let selectedTime = timeDOM.children[1].value;
    let [selectedHours,selectedMinutes]=selectedTime.split(':');
    selectedMinutes = Number(selectedMinutes) + selectedHours*60;
    let nowTime = new Date();
    let nowHours = nowTime.getHours();
    let nowMinutes = nowTime.getMinutes();
    nowHours = nowHours*60;
    nowMinutes += nowHours;
    if(selectedMinutes>nowMinutes){
        timeDOM.classList.add('invalid');
        timeDOM.classList.remove('valid');
    } else{
        timeDOM.classList.add('valid');
        timeDOM.classList.remove('invalid');
    }
})