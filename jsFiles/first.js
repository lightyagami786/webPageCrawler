let b={'codewithharry.com':true,'youtube.com':true};

let a=document.links;
for(let i=0;i<a.length;i++){
    
    if(a[i].innerHTML in b){
        console.log(a[i].innerHTML);
    }
    
}