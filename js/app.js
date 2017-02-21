var HTMLworks = "";
while(data.hasNext()){
    var work = data.works.pop();
    HTMLworks = HTMLworks + '<figure class="col" >'+                               
                '<a href="'+work.link+'"><img src="images_src/'+work.img+'" alt="'+work.alt+'">'+
                '<figcaption><h2>'+work.description+'<br /><em>'+work.link+'</em></h2></a>';
    HTMLworks = HTMLworks + '</figcaption></figure>';
}

document.getElementById('main').innerHTML = HTMLworks;



                