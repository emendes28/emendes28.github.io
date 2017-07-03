function inName(name) {  
    var names = name.split(" ");
    names[names.length -1] = names[names.length -1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();   
    return names.join(" ");
}

function show() {
    bio.display();
    education.display();
    projects.display();
    work.display();

   // $('#main').prepend(internationalizeButton);
    $("#mapDiv").append(googleMap);
    $(function () {
        $('.envelope').click(function (event) {
            var subject = 'Job Freelancer';
            var emailBody = 'Dei uma olhada em seu curriculo e gostei do seu perfil para o trabalho : ' ;
            document.location = "mailto:"+bio.contacts.email+"?subject="+subject+"&body="+emailBody;
        });

        $('.mobile').click(function (event) {
            document.location = "tel:"+bio.contacts.mobile;
        });

        $('.github').click(function (event) {
            document.location = "https://github.com/"+bio.contacts.github;
        });

        $('.twitter').click(function (event) {
            document.location = "https://twitter.com/"+bio.contacts.twitter.replace('@','');
        });

        $('.location').click(function (event) {
            document.location = "https://www.google.com.br/maps/place/"+bio.contacts.location;
        });
    });
}

var skills = ["analist","developer","codding","research","consulting"];

var bio = {
    "name" : "Evandro de Santa Isabel Mendes",
    "role" : "System Analist",
    "contacts" : {
        "mobile" : "+55 71 999954459", 
        "email" : "evandrosimendes@gmail.com",
        "github" : "emendes28",
        "twitter" : "@emendes285",
        "location" : "Sussurana, Salvador - BA"
    },
    "welcomeMessage" : "Full Stack Developer and interested in developing intelligent solutions for environmental and urban problems of cities in the world today",
    "skills": skills,
    "biopic" : "images/me.jpg",
    "display" : function () {        
        var contactsIds, formattedName,formattedRole,formatedWelcomeMsg, formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation,formattedBioPic,formattedSkill;
        
        contactsIds = ["#topContacts","#footerContacts"];
        
        formattedName = HTMLheaderName.replace("%data%",inName(bio.name));
        formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
        formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);
        $('#header').append(formatedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        
            for(id in contactsIds){
                $(contactsIds[id]).append(formattedMobile);
                $(contactsIds[id]).append(formattedEmail);
                $(contactsIds[id]).append(formattedTwitter);
                $(contactsIds[id]).append(formattedGithub);        
                $(contactsIds[id]).append(formattedLocation);
            }

        if ($( window ).width() < 900) {
            for(skill in bio.skills){
                formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
                $("#skills").prepend(formattedSkill);
            }
        }       
    }
};

var education = {
    "schools" : [
        {
            "name" : "Udacity",
            "location" : "Sussuarana, Salvador - BA",
            "degree" : "Nanodegree",
            "majors" : ["FrontEnd"],
            "dates" : 2017,
            "url" : "https://udacity.com/"
        },
        {
            "name" : "Unijorge",
            "location" : "Paralela, Salvador - BA",
            "degree" : "BA",
            "majors" : ["Analist","Developement","Information Technology", "Information Systems"],
            "dates" : 2016,
            "url" : "http://www.unijorge.edu.br/"
        },
        {
            "name" : "EEEMBA",
            "location" : "Nazaré, Salvador - BA",
            "degree" : "Techinical",
            "majors" : ["Techinical","Eletronic"],
            "dates" : 2008,
            "url" : "http://www.eeemba.br/"
        },
        {
            "name" : "Microlins",
            "location" : "Itapuã, Salvador - BA ",
            "degree" : "Techinical",
            "majors" : ["Techinical","Computer","Network","Hardware"],
            "dates" : 2007,
            "url" : "http://www.microlins.com.br/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Agil Developement with Advanced Java",
            "school" : "Instituto Tecnológico de Aeronáutica - ITA",
            "dates" : "February 2017 - March 2012",
            "url" : "https://www.coursera.org/learn/desenvolvimento-agil-com-java-avancado/home/welcome"
        },
        {
            "title" : "Scrum Fundamentals Certified",
            "school" : "SCRUMstudy, License 567148",
            "dates" : "February 2017 ",
            "url" : "http://www.scrumstudy.com/scrum-master-certification.asp"
        },
        {
            "title" : "HTML5 - Homologado pelo W3C",
            "school" : "Microsoft",
            "dates" : "February 2017 ",
            "url" : "https://drive.google.com/open?id=0B92AeDAoseReMTNncUlVQ2lWY2M"
        }
    ],
    "display" : function() {
                    for(school in education.schools){
                        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
                        var formattedDegree =  HTMLschoolDegree.replace("%data%",education.schools[school].degree);
                        var formattedNameDegree = formattedName + formattedDegree;
                        var formattedDates =  HTMLschoolDates.replace("%data%",education.schools[school].dates);
                        var formattedLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].location);
                        var formattedMajor =  HTMLschoolMajor.replace("%data%",education.schools[school].majors);
                        
                        $("#education").after(HTMLschoolStart);
                        $(".education-entry:last").append(formattedNameDegree);
                        $(".education-entry:last").append(formattedDates);
                        $(".education-entry:last").append(formattedLocation);
                        $(".education-entry:last").append(formattedMajor);
                    } 

                         $(".education-entry:last").append(HTMLonlineClasses);
                    for(course in education.onlineCourses){
                        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
                        var formattedSchool =  HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
                        var formattedTitleSchool = formattedTitle + formattedSchool;
                        var formattedDates =  HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
                        var formattedURL =  HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);                       
                        
                         $(".education-entry:last").append(formattedTitleSchool);
                    }
    }
};

var work = {
    "jobs" : [
        {
            "employer" : "Solutis",
            "title" : "Systems Analyst Developer",
            "location" : "CAB - Salvador - BA",
            "dates" : "August 2016 - Present",
            "description" : "Solution Architect, Systems Analyst and Full Stack Programmer. "+
                            "BackEnd: Java 8 Skills Stream, Lambda, Java EE7, Jpa 2.1 / Hibernate, EJB, CDI, JAX-RS, JAX-WS, Wildfly, Jboss EAP 6.3, Maven, Design patterns."+
                            "FrontEnd: Angle 1.X, and 2.X, React, Gulp, Boostrap. "+
                            "Architecture: Microservices, Nanoservices, Reactive and Distributed Computing."
        },{
            "employer" : "Capgemini",
            "title" : "Junior Systems Analyst",
            "location" : "Iguatemi - Salvador - BA",
            "dates" : "June 2015 - June 2016",
            "description" : "Development of solutions, and migration using Java technology SE 5 to 7 and Java EE 5, 6 and use of EJB's. Also using the JSF 1.2 and 2.0 framework, Apache CXF and POI, JAXB, for security JAAS and Spring Security, as well as Apache Wicket, Spring, Reporting tool like JasperReport (IReport) and FrontEnd in AngularJS and bootstrap. SQL Server 2000, 2008, and DB2 data."
        },{
            "employer" : "Stefanini",
            "title" : "Systems Analyst",
            "location" : "Magalhães Neto - Salvador - BA",
            "dates" : "December 2012 - March 2015",
            "description" : "Evolutionary and adaptive maintenance in solutions with classic ASP and PHP 5 also documentation with Sphinx, Cake frameworks, Yii (basic) WebService development RestFull and developement in android, VB.Net desktop and PL / SQL procedures, triggers and JOB's in the Oracle database."
        },{
            "employer" : "Avansys",
            "title" : "Web and Database Developer",
            "location" : "CAB - Salvador - BA",
            "dates" : "September 2011 - September 2012",
            "description" : "JAVA 5 and ASP Classic JBOSS server with RichFaces, Hibernate with JPA, and Oracle database"
        },{
            "employer" : "EcGlobal and Prefecture of Salvador - BA",
            "title" : "Trainee",
            "location" : "Horto Bela Vista - Salvador - BA",
            "dates" : "February 2011 - July 2011",
            "description" : "FrontEnd Developement of many projects and manutence"
        }
    ],
    "display" : function () {
                    for(job in work.jobs){
                        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
                        var formattedTitle =  HTMLworkTitle.replace("%data%",work.jobs[job].title);
                        var formattedEmployerTitle = formattedEmployer + formattedTitle;
                        var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
                        var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
                        var formattedLocation =  HTMLworkLocation.replace("%data%",work.jobs[job].location);

                        $("#workExperience").append(HTMLworkStart);
                        $(".work-entry:last").append(formattedEmployerTitle);                        
                        $(".work-entry:last").append(formattedDates);
                        $(".work-entry:last").append(formattedLocation);
                        $(".work-entry:last").append(formattedDescription);
                    }                    
                }
};

/*{ 
            "description" : "Portal de serviços com consulta publica e diversas funcionalidades de acesso ao cidadão usando uma arquitetura reativa e microservice, com java EE 7, java 8, Angular.",
            "title" : "Portal de Serviços",
            "link" : "",
            "dates" : "August 2016 to Present",
            "images" : ["images_src/portalservicos-320x240.jpeg",
                        "images_src/ordenacaoprocessual-320x240.jpeg",
                        "images_src/sentenca-interdicao-320x240.jpeg"]
        },*/

var projects = {
    "projects" : [ 
        { 
            "description" : "Meus projetos e sistemas feito por estudo, trabalho ou diversão com a motivação da nanograduação",
            "title" : "Portifolio",
            "link" : "https://emendes28.github.io/portifolio/index.html",
            "dates" : "",
            "images" : ["images_src/portifolio-320x240.png"]
        },{ 
            "description" : "Encarte Digital is project in my graduacion",
            "title" : "Encarte Digital",
            "link" : "https://goo.gl/7XvTjK",
            "dates" : "02/2017",
            "images" : ["images_src/encarte-digital-farmacia-320x240.png",
                        "images_src/encarte-digital-menu-320x240.png",
                        "images_src/encarte-digital-tablet-320x240.png",
                        "images_src/EncarteDigital-320x240.png"]
        },{ 
            "description" : "Sistema de outorga de candidatos do concurso feito em nodeJs com websockets para os paines e em SOA com angularJs, bootstrap,bower, java 8 e as JSR 311, 317, 330, 339, 356, 365, JasperReports, maven",
            "title" : "Sistema de outorga",
            "link" : "",
            "dates" : "December 2016 to January 2017",
            "images" : ["images_src/sisout-320x240.jpeg",
                        "images_src/sisout2-320x240.jpeg",
                        "images_src/sisout3-320x240.jpeg",
                        "images_src/sisout4-320x240.jpeg"]
        },{ 
            "description" : "Projeto de migração a sistema de apolice de seguros feito em AngularJs, bootstrap e backend Java com arquitetura SOA",
            "title" : "GSRE - Avliq",
            "link" : "",
            "dates" : "April 2015 to November 2015",
            "images" : ["images_src/gsre-avliq-320x240.png"]
        },{ 
            "description" : "Sistema da ACBEU em seus diversos modulos em ASP 3.0 com algumas funcionalidades em PHP 5 em migração para Cake um erp e banco de dados Oracle",
            "title" : "Sistema Gerencial ACBEU",
            "link" : "http://acbeubahia.org.br/",
            "dates" : "December 2012 to February 2015",
            "images" : ["images_src/myacbeu-320x240.jpeg"]
        },{ 
            "description" : "Sistema de alfabetizando do Governo da Bahia feito em Java 5, com servidor de aplicação JBOSS, JSF, richfaces, Ant e banco oracle",
            "title" : "Gestão TOPA",
            "link" : "http://www3.sec.ba.gov.br/gsec/gestaotopa/login.seam",
            "dates" : "January 2012 to September 2012",
            "images" : ["images_src/gestaotopa-320x240.png"]
        },{ 
            "description" : "Fiz os serviços para processar as requisições do aplicativo e densenvolvi uma versão que não foi a que foi publicada Segue URL em Google Play : https://play.google.com/store/apps/details?id=com.virtualizesolucoes.acbeu&hl=pt_BR",
            "title" : "Aplicativo ACBEU - BackEnd",
            "link" : "https://itunes.apple.com/br/app/acbeu/id771893574?mt=8",
            "dates" : "",
            "images" : ["images_src/appacbeu1-320x240.jpeg",
                        "images_src/appacbeu2-320x240.jpeg",
                        "images_src/appacbeu3-320x240.jpeg",
                        "images_src/appacbeu4-320x240.jpeg"]
        },{ 
            "description" : "Corrigi uns bugs da migração da versão do primefaces e do framework proprietário TJFW e desenvolvi um relatório",
            "title" : "SISCOMP - Sistema de Compras",
            "link" : "",
            "dates" : "November 2016 to February 2017",
            "images" : ["images_src/comprasTela1-320x240.png",
                        "images_src/comprasTela2-320x240.png",
                        "images_src/comprasTela3-320x240.png",
                        "images_src/comprasTela4-320x240.png"]
        },{ 
            "description" : "Fiz deversas manutenções evolutivas e corretivas no sistema",
            "title" : "Sistema da Biblioteca ACBEU",
            "link" : "http://www.acbeubahia.org.br/cultural/consacervo.asp?sub3=on",
            "dates" : "",
            "images" : ["images_src/acbeubiblioteca-320x240.png"]
        },{ 
            "description" : "Sistema em PHP 5.6 no qual auxliei no desenvolvimento de rotinas e estruturação OO bem como a documentação do mesmo",
            "title" : "ERP - Sistema de Controle Financeiro ACBEU",
            "link" : "http://www.acbeubahia.org.br/erp/acesso.php",
            "dates" : "",
            "images" : ["images_src/erp-320x240.png"]
        }                            
    ],
    "display" : function() {
                    for(project in projects.projects){
                        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);                       
                        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
                        var formattedDates =  HTMLprojectDates.replace("%data%",projects.projects[project].dates);
                        
                        $("#projects").after(HTMLprojectStart);
                        $(".project-entry:last").append(formattedTitle);
                        $(".project-entry:last").append(formattedDates);
                        $(".project-entry:last").append(formattedDescription);
                        for(img in projects.projects[project].images){
                            var formattedImage =  HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
                            $(".project-entry:last").append(formattedImage);
                        }
                    } 
               }
};

show();