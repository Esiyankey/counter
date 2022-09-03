const num=document.querySelector("#number");
const btn=document.querySelectorAll(".btn");
let count= 0;
btn.forEach(function(item){
    item.addEventListener('click',function(e){
        const styles =e.currentTarget.classList;
       if(styles.contains("decrease")){
           count--;
           num.style.color='red';
       }
       else if(styles.contains("reset")){
           count=0;
       }
       else {
        count++;
        num.style.color='green';
       }
       num.textContent=count;
    });
    
});
