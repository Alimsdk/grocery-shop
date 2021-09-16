const showBorder=(id,linkStyle)=>{
    document.getElementById(id).style.borderBottom=linkStyle;
 }

document.getElementById('all-section').addEventListener('click',function(){
     showBorder('all-section',"3px solid green");
     showBorder('orange-section','none');
     showBorder('meat-section','none');
     showBorder('vegetable-section','none');
     showBorder('fastfood-section','none');

     const displayProducts= document.getElementsByClassName('all');

    for(const product of displayProducts){
        product.style.display="block"
    }
    
});

document.getElementById('orange-section').addEventListener('click',function(){
    showBorder('all-section',"none");
     showBorder('orange-section','3px solid green');
     showBorder('meat-section','none');
     showBorder('vegetable-section','none');
     showBorder('fastfood-section','none');

     const hideProducts= document.getElementsByClassName('all');

    for(const product of hideProducts){
        product.style.display="none"
    }

     const displayProducts= document.getElementsByClassName('orange');

    for(const product of displayProducts){
        product.style.display="block"
    }


});

document.getElementById('meat-section').addEventListener('click',function(){
    showBorder('all-section',"none");
    showBorder('meat-section','3px solid green');
    showBorder('orange-section','none');
    showBorder('vegetable-section','none');
    showBorder('fastfood-section','none');

    const hideProducts= document.getElementsByClassName('all');

    for(const product of hideProducts){
        product.style.display="none"
    }

     const displayProducts= document.getElementsByClassName('fresh-meat');

    for(const product of displayProducts){
        product.style.display="block"
    }
});

document.getElementById('vegetable-section').addEventListener('click',function(){
    showBorder('all-section',"none");
    showBorder('vegetable-section','3px solid green');
    showBorder('orange-section','none');
    showBorder('meat-section','none');
    showBorder('fastfood-section','none');

    const hideProducts= document.getElementsByClassName('all');

    for(const product of hideProducts){
        product.style.display="none"
    }

     const displayProducts= document.getElementsByClassName('vegetable');

    for(const product of displayProducts){
        product.style.display="block"
    }
});

document.getElementById('fastfood-section').addEventListener('click',function(){
    showBorder('all-section',"none");
    showBorder('orange-section','none');
    showBorder('meat-section','none');
    showBorder('vegetable-section','none');
    showBorder('fastfood-section','3px solid green');

    const hideProducts= document.getElementsByClassName('all');

    for(const product of hideProducts){
        product.style.display="none"
    }

     const displayProducts= document.getElementsByClassName('fastfood');

    for(const product of displayProducts){
        product.style.display="block"
    }
});




