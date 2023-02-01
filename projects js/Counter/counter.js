let count  =0;

const value =document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
// console.log(e.currentTarget.classList);

const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
    count--;
} else if(styles.contains('increase')){
    count++;
} else if(styles.contains('reset')){
    count =0;
}
if(count>0){
    value.style.color = "green";
}else if(count<0){
    value.style.color ="red";
} else if(count === 0){
      value.style.color ="#333";
}
value.textContent = count;
})

});
