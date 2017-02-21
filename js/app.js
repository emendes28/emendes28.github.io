var HTMLworks = "";
while(data.hasNext()){
    var work = data.works.pop();
    HTMLworks = HTMLworks + '<figure class="col" >'+                               
                '<a href="'+work.view+'"><img src="images_src/'+work.img+'" alt="'+work.alt+'"></a>'+
                '<a href="'+work.link+'"><figcaption><h2>'+work.description+'<br /><em>'+work.link+'</em></h2></a>';
    if(work.mockup != undefined){
        HTMLworks = HTMLworks +'<a href="'+work.mockup+'">View mockup</a><br />'
    }
    HTMLworks = HTMLworks + '</figcaption></figure>';
}

document.getElementById('main').innerHTML = HTMLworks;



                