var HTMLwork = "";
var HTMLworks = "";
var i = 0;
while(i < data.works.length){
    HTMLwork =  `<figure class="col" onclick="openModal(%data.id%)" >
                        <img src="image/%data.img%" alt="%data.alt%">                     
                        <h2>%data.description%</h2>
                    </figure>`;
    HTMLwork = HTMLwork.replace("%data.img%",data.works[i].img);
    HTMLwork = HTMLwork.replace("%data.alt%",data.works[i].alt);
    HTMLwork = HTMLwork.replace("%data.description%",data.works[i].description);
    HTMLwork = HTMLwork.replace("%data.alt%",data.works[i].link);
    HTMLwork = HTMLwork.replace("%data.id%",data.works[i].id);
    HTMLworks = HTMLworks +HTMLwork;
    i++;
}


document.getElementById('main').innerHTML = HTMLworks;

function openModal(id){
    var url = location.href.replace("index.html","");
    var modal =  document.getElementById('myModal');
    var work = data.works[id];
    var content =
     `<div class="modal-content">
            <div class="modal-header">
                <span class="close" onclick="document.getElementById('myModal').style.display= 'none'">&times;</span>
                <h2>`+work.description+`</h2>
            </div>
            <div class="modal-body">
                <figure>
                    <img class="imgFull" src="img/projects/`+work.imgFull+`" alt="`+work.alt+`">    
                </figure>
            </div>
           <div class="modal-footer">
                <div class="row">
                    <blockquote class="col-3" >
                        <button class="button" onclick="window.open('`+url.concat(work.view)+
                        `')" alt="View the project" ><span>Open result</span></button></blockquote>`;
                        if(work.mockup != undefined)
                            content = content + '<blockquote class="col-3"><button class="button" onclick="window.open(\''+url.concat(work.mockup)+'\')" alt="View the project" ><span>Open mockup</span></button></blockquote>';
                    content = content +`<blockquote class="col-3"><button class="button"  onclick="window.open('`+work.link+`')"  ><span>View codding</span></button></blockquote>   
                </div>
           </div>`;
    modal.innerHTML = content;
    modal.style.display = "block";

}


                