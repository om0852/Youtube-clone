let threedots = document.getElementsByClassName('threedots')[0];
let threedot = document.getElementsByClassName('threedot')[0];
let push_logo = document.getElementsByClassName('push-logo')[0];
let button = document.getElementsByClassName('sign-in-btn')[0];
let sidebar_icon =  document.querySelectorAll('sidebar-p');
let sidebar = document.getElementsByClassName('sidebar')[0];
let scroll1 = document.getElementsByClassName('scroll')[0];
let sidebar_ul_li = document.querySelectorAll(".sidebar_ul_li");
let sidebar_ul = document.getElementsByClassName('sidebar-ul')[0]; 
let container = document.getElementsByClassName('move')[0];
let threedot_count =1;
let count =1;

threedots.onclick= function(){
    if(threedot_count==1){
    threedot.classList.add('threedot-overflow');
    threedot_count =0;
}
else{
    threedot.classList.remove('threedot-overflow');
    threedot_count =1;
    }
}

// push logo in header File
push_logo.onclick= function(){
    if(count==1){
        for(let i=0;i<sidebar_ul_li.length;i++){
            container.style.left=" 13vh";
            sidebar_ul_li[i].style.display="inline";
            sidebar.classList.add('sidebar-overflow');
            sidebar_ul_li[i].classList.add('sidebar_ul_li_overflow');
            // sidebar_icon[i].style.marginLeft="6vh";
            // scroll1.style.width ="15vh";
            
            count =0;
        }
}
else{
    count =1;
    for(let i=0;i<sidebar_ul_li.length;i++){
        // scroll1.style.width ="35vh";
        sidebar_icon[i].style.marginLeft="0vh";
        sidebar_ul_li[i].style.display="flex";
        sidebar.classList.remove('sidebar-overflow');
        container.style.left=" 34vh";
            sidebar_ul_li[i].classList.remove('sidebar_ul_li_overflow');
    // sidebar_ul_li[i]=            
    // count =1;
            }
    
}

}