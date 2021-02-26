//selection
var form=document.querySelector("form");
var input=document.querySelector("#data");
var Addul=document.querySelector("ul");
var select=document.querySelector("select");
var clearr=document.querySelector("#clear");
var data=[];


//event listener
form.addEventListener("submit",sub);
select.addEventListener("click",filter);
clearr.addEventListener("click",clear)

//function
function sub(e){
    e.preventDefault();
    if(input.value.length>0){
        adddiv(input.value);
        data.push(input.value);
        localStorage.setItem("tasks",JSON.stringify(data));
        input.value="";
    }
}

function adddiv(yourTask){
    var div=document.createElement("div");
    var li=document.createElement("li");
    var button1=document.createElement("button");
    var button2=document.createElement("button");
    var i1=document.createElement("i");
    var i2=document.createElement("i");
    li.innerHTML=yourTask;
    i1.setAttribute("class","fa fa-check");
    i2.setAttribute("class","fa fa-times");
    button1.appendChild(i1);
    button2.appendChild(i2);
    div.appendChild(li);
    div.appendChild(button1);
    div.appendChild(button2);
    Addul.appendChild(div);
    //add features to the rest of items
    
    button1.addEventListener("click",function(){
        li.setAttribute("class","semi-done-li semi-done-div");
        button1.setAttribute("class","semi-done-div");
        div.classList.add("done");
    })

    button2.addEventListener("click",function(){
        div.classList.add("B");
        div.setAttribute("class","bye");
        div.style.transition="all 0.5s ease";
        div.remove();
        localStorage.removeItem(localStorage.key(0,2));
        }
    )
}

function filter(e){
    const todos=Addul.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all": 
            todo.style.display="flex";
            break;
            case "done":
                if(todo.classList.contains("done")){
                    todo.style.display="flex";
                }else{todo.style.display="none"}
            break;
            case "not-done":
                if(!todo.classList.contains("done")){
                    todo.style.display="flex";
                }else{todo.style.display="none"}
                break;
            }
        })
    }

    function clear(){
        Addul.innerHTML="";
        localStorage.clear()
    }
