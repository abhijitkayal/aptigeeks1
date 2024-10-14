var data={
    chatinit:{
        title:["hello <span class='emoji'> &#128075;</span>","i am mr.chatbot","how can i help you"],
        options:["movies <span class='emoji'> &#128090;</span>","news","shopping <span class='emoji'>&#128090;</span>","music <span class='emoji'>&#127925;</span>","hollywood <span class='emoji'>&#127925;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>","movies <span class='emoji'> &#128090;</span>"]
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },
    news: {
        title:["todays top 5 headline"],
        options:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, consequuntur!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, consequuntur!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, consequuntur!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, consequuntur!","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, consequuntur!"]
    },
    shopping:{
        title:["please choose shopping category <span class='emoji'> &#128090;</span>"],
        options:['electronics','beauty products','dresses'],

    },
    music:{
        title:["this are some latest song <span class='emoji'>&#127925;</span>"],
        options:["song 1","song 2","song 3","song 4","song 5"],
    },
    hollywood:{
        title:["these are some latest hollywood movie to watch","click 0on movie to know more"],
        options:["movie 1","movie 2","movie 3","movie 4"],
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },
    movies:{
        title:["please select category"],
        options:['hollywood','bollywood','web series','others'],
        url:{}
    },

}




document.getElementById("init").addEventListener("click",showChatbot);
var cbot=document.getElementById("chat-box");
var len1=data.chatinit.title.length;
function showChatbot(){
    console.log(this.innerText);
    if(this.innerText=='start'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='close';
        initchat();
    }
    else{
        location.reload();
    }
}
function initchat(){
   j=0;
    cbot.innerHTML="";
    for(var i=0;i<len1;i++){
        setTimeout(handlechat,(i*500));
    }
    setTimeout(function(){
        showoptions(data.chatinit.options);
    },(len1+1)*500);
}
var j=0;
function handlechat(){
    console.log(j);
    var elm=document.createElement("p");
    elm.innerHTML=data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handlescroll();
}
function showoptions(options){
    console.log("hi");
    for(var i=0;i<options.length;i++){
        var opt=document.createElement("span");
        var inp='<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click",handleopt);
        cbot.appendChild(opt);
        handlescroll();
    }
}
function handleopt(){
    console.log(this);
    var str=this.innerText;
    var textarr=str.split(" ");
    var findText=textarr[0];
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm=document.createElement("p");
    // elm.setAttribute("class","test");
    var sp='<span class="rep">'+findText+'</span>';
    elm.innerHTML=sp;
    cbot.appendChild(elm);
    console.log(findText.toLowerCase());
    var tempobj=data[findText.toLowerCase()];
    handleResults(tempobj.title,tempobj.options);
}
function handleResults(title,options){
    for(let i=0;i<title.length;i++){
        var elm=document.createElement("p");
        elm.innerHTML=title[i];
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
    }
    handleoptions(options);
}
function handleoptions(options){
    for(var i=0;i<options.length;i++){
        var opt=document.createElement("span");
        var inp='<a class="m-link" href="#">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
}
function handlescroll(){
    var elem=document.getElementById("chat-box");
    elem.scrollTop=elem.scrollHeight;
}