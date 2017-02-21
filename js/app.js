var HTMLworks = "";
while(data.next()){
    var work = data.works.pop();
    HTMLworks = HTMLworks + '<figure class="col" onclick="openModal(%data.id%)" >'+
                '<a href="'+work.view+'">'+
                '<img src="image_src/'+work.img+'" alt="'+work.alt+'">'+
                '</a><figcaption>';
    if(work.mockup != undefined){
        HTMLworks = HTMLworks +'<a href="'+work.mockup+'">View mockup</a>'
    }
    HTMLworks = HTMLworks +'<a href="'+work.link+'">'+
                '<em>'+work.description+'</em>'+
                '</figcaption></figure>';
}

document.getElementById('main').innerHTML = HTMLworks;



                