const buttons=document.querySelectorAll(".tabBtn");
const contents=document.querySelectorAll(".tabContent");
contents[0].style.display="block";

// explanation : -
buttons.forEach((button,index)=>{


    button.addEventListener('click',( )=>{

        // all hide
        contents.forEach((content)=>{
            content.style.display="none";
        })
        //

        contents[index].style.display="block";
    })


})

