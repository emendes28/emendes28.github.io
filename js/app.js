var HTMLworks = "";
while(data.hasNext()){
    var work = data.works.pop();
    document.getElementById('main').innerHTML = document.getElementById('main').innerHTML.concat(
    document.getElementById('jobTemplate').innerHTML
            .replace("{{work.link}}",work.link).
                replace("{{work.img}}",work.img).
                replace("{{work.alt}}",work.alt).
                replace("{{work.description}}",work.description).
                replace("{{work.link}}",work.link));
}




                