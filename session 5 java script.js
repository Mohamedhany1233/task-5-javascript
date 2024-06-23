//parent code


//parent code

var father = document.getElementById("parent")
var section = document.createElement('section')
father.appendChild(section)
//image code
var image = document.createElement('img')
image.src ='https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
image.style='width:200px; border-radius:200px;'
section.appendChild(image)
//heading code
var heading = document.createElement("h2")
heading.innerHTML="French Fries"
heading.style='margin-left:28px;'
section.appendChild(heading)
//paragraph code
var prag = document.createElement('p')
prag.innerHTML='Lorem ipsum dolor sit amet,<br> consectetur adipisicing.'
prag.style='margin-left:14px;'
section.appendChild(prag)
//button code
var btn = document.createElement('button')
btn.innerHTML='Buy'
btn.style = 'padding:2px; width:60px; border-color:slateblue; background-color:slateblue; border-radius:5px; font-weight:bold; font-size:14px; color:white;margin-left:50px; margin-top:28px;'
section.appendChild(btn)
section.style = "margin-left:390px; margin-top:300px;"
section.classList.add('section1')
var section1 = document.querySelector('.section1')
/////////////////////////////////

//section 2

//parent code
var father = document.getElementById("parent")
var section = document.createElement('section')
father.appendChild(section)
//image code
var image = document.createElement('img')
image.src ='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
image.style='width:200px; border-radius:200px;'
section.appendChild(image)
//heading code
var heading = document.createElement("h2")
heading.innerHTML="Burger"
heading.style='margin-left:50px; margin-top:36px;'
section.appendChild(heading)
//paragraph code
var prag = document.createElement('p')
prag.innerHTML='Lorem ipsum dolor sit amet,<br> consectetur adipisicing.'
prag.style='margin-left:14px;'
section.appendChild(prag)
//button code
var btn = document.createElement('button')
btn.innerHTML='Buy'
btn.style = 'padding:2px; width:60px; border-color:slateblue; background-color:slateblue; border-radius:5px; font-weight:bold; font-size:14px; color:white;margin-left:50px; margin-top:30px;'
section.appendChild(btn)
section.style = "margin-left:100px; margin-top:300px;"
section.classList.add('section2')
var section2 = document.querySelector('.section2')
//section 3

//parent code
var father = document.getElementById("parent")
var section = document.createElement('section')
father.appendChild(section)
//image code
var image = document.createElement('img')
image.src ='https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
image.style='width:200px; border-radius:200px;'
section.appendChild(image)
//heading code
var heading = document.createElement("h2")
heading.innerHTML="Pizza"
heading.style='margin-left:28px; margin-top:30px; margin-left:60px;'
section.appendChild(heading)
//paragraph code
var prag = document.createElement('p')
prag.innerHTML='Lorem ipsum dolor sit amet,<br> consectetur adipisicing.'
prag.style='margin-left:14px;'
section.appendChild(prag)
//button code
var btn = document.createElement('button')
btn.innerHTML='Buy'
btn.style = 'padding:2px; width:60px; border-color:slateblue; background-color:slateblue; border-radius:5px; font-weight:bold; font-size:14px; color:white;margin-left:60px; margin-top:30px;'
section.appendChild(btn)
//ends sections code
father.style = "display:flex;"
section.style = "margin-left:100px; margin-top:300px;"
section.classList.add('section3')
var section3 = document.querySelector('.section3')


////

var inputBtn = document.getElementById('inputBtn')
var inputsearch = document.getElementById('inputsrc')
var frenshfries = 'frensh fries'
var burger = 'burger'
var pizza  = 'pizza'
var clickbtn = inputBtn.onclick = function(){
    //section 1
    if (frenshfries.includes(inputsearch.value))
        {
            section2.style='display:none;'
            section3.style='display:none;'
        }
        else
        {
            section1.style='display:none;'
             section2.style='display:none;'
             section3.style='display:none;'
        }
        //section 2
        if (burger.includes(inputsearch.value))
                {
                    section1.style='display:none;'
                    section2.style='margin-left:690px; margin-top:300px;'
                    section3.style='display:none;'
                }
                 //section 3
                 if (pizza.includes(inputsearch.value))
                    {
                        section1.style='display:none;'
                        section2.style='display:none;'
                        section3.style='margin-left:990px; margin-top:300px; '
                    }

}

