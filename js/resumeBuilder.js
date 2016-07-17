/*
Resumebuilder file for building interactive resume
*/

var bio = { "name": "Sam Crouch",
	    "role": "Front End Web Developer",
	    "contacts": {
		"mobile": "254-205-1317",
		"email": "chacursmo@gmail.com",
		"github": "chacursmo",
		"twitter": "@chacursmo",
		"location": "Itasca, Texas"
	    },
	    "welcomeMessage": "Greetings my friend; shall we be informal?",
	    "skills": ["HTML", "CSS", "Javascript", "Photography", "Visual Design", "C/Python Programming"],
	    "bioPic": "/images/me.jpg",
	    "display": function() {

		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

		$("#header").prepend(formattedHeaderRole);
		$("#header").prepend(formattedHeaderName);


		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedWelcome);
		$("#header").append(formattedBioPic);

		if (bio.skills.length > 0) {
		    $("#header").append(HTMLskillsStart);
		    for (var ind = 0; ind < bio.skills.length; ind++) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[ind]);
			$("#skills").append(formattedSkills);


		    }
		}
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);


	    }
	    
	    
	  };

var work = { "jobs":
	     [{
		 "title": "Technology Facilitator",
		 "employer": "Alvarado ISD",
		 "location": "Alvarado, Texas",
		 "dates" : "2005-2006",
		 "description": "Supported Two Campus' Adminitrators and Faculties within a mid-size school district in a rural area. Developed scripts to maintain software productivity. In concert with School Teachers generated STEM classroom content. Implemented conversion of <strong>www.alvaradoisd.net</strong> web site into open source content management system."
	     },
	      {
		  "title": "Tier Two Network Support",
		  "employer": "Verizon",
		  "location": "Southlake, Texas",
		  "dates": "2012",
		  "description": "Interpreted network data from customer reported service interruptions and diagnosed proper steps towards resolution."
	      }
	     ],
	     "display": function(){
		 for (var index = 0; index < work.jobs.length; index++) {
		     $("#workExperience").append(HTMLworkStart);

		     var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
		     var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
		     var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		     var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		     var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
    
		     $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
		     $(".work-entry:last").append(formattedWorkDates);
		     $(".work-entry:last").append(formattedWorkLocation);
		     $(".work-entry:last").append(formattedWorkDescription);
		 }

	     }
	   };

var education = { "schools": [
    { "name": "University of Texas",
      "degreeDates": "2012",
      "degree": "BA",
      "major": ["Religious Studies"],
      "url": "www.utexas.edu",
      "location": "Austin, Texas"
    },
    { "name": "Udacity",
      "degreeDates": "2016",
      "degree": "NanoDegree",
      "major": ["Front End Web Development"],
      "url": "www.udacity.com",
      "location": "Itasca, Texas"
    }],
		  "onlineClasses": { "course" :
				     [ { "title" : "Learning How to Learn: Powerful mental tools to help you master tough subjects",
					 "school": "Coursera",
					 "dates": "2015",
					 "url": "www.coursera.org"
				       },
				       { "title": "Machine Learning",
					 "school": "Coursera",
					 "dates": "2016",
					 "url": "www.coursera.org"
				       },
				       { "title": "Introduction to Programming with Java - Part 1: Starting to Program in Java",
					 "school": "edX",
					 "dates": "2015",
					 "url": "www.edx.org"
				       },
				       { "title": "Introduction to Computer Science and Programming Using Python",
					 "school": "edX",
					 "dates": "2016",
					 "url": "www.edx.org"
				       }]},
		  "display": function() {
		      for (var i = 0; i < education.schools.length; i++){
			  $("#education").append(HTMLschoolStart);
			  var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
			  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			  $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].degreeDates);
			  $(".education-entry:last").append(formattedSchoolDates);
			  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			  $(".education-entry:last").append(formattedSchoolLocation);
			  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major[0]);
			  $(".education-entry:last").append(formattedSchoolMajor);
		      }

		      
			  
		      $("#education").append(HTMLonlineClasses);
		      $("#education").append(HTMLschoolStart);
		      for (var index = 0; index < education.onlineClasses.course.length; index++) {
			  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses.course[index].title);
			  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses.course[index].school);
			  $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses.course[index].dates);
			  $(".education-entry:last").append(formattedOnlineDates);
			  var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses.course[index].url);
			  $(".education-entry:last").append(formattedOnlineURL);
		      }
		  }};




var project = { "ind_projects":
		 [{
		     "title": "Installation of Computer Labs",
		     "dates": "2005",
		     "description": "Unpacked newly purchased Dell Desktop Computers, Installed appropriate software, Transported Computers to School Site, Ensured network connectivity with ethernet cable, Performed final adjustments on operating systems.",
		     "image": "/images/hmm.jpg"
		 },
		  {
		      "title": "Open Source Content Managment System Web Site Conversion",
		      "dates": "2006",
		      "description": "Surveyed and archived district web site, installed LAMP software, debugged open source content management system, Named Joomla Jedi by coworkers.",
		      "image": "/images/whoa.jpg"
		  },
		  {
		      "title": "Sentient Electronic Pet Rock",
		      "dates": "2016 - Present",
		      "description": "Using notion of a bicameral computer, reasoning aptitude for deep ideas, and learning from online electronic course: building the toy everyone desires to have, whom which is thinking.",
		      "image": "/images/whoo.jpg"
		  }
		 ]};

project.display = function() {
    for (var index = 0; index < projects.ind_projects.length; index++) {
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.ind_projects[index].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.ind_projects[index].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.ind_projects[index].description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.ind_projects[index].image);
	$(".project-entry:last").append(formattedProjectImage);
    }
};




$("#mapDiv").append(googleMap);



bio.display();
work.display();
project.display();
education.display();

$(document).click(function(loc) {
    logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name_str) {
    var result = [];
    result = name_str.split(" ");
    var first_name = result[0];
    var last_name = result[1];
    last_name = last_name.toUpperCase();
    first_name = first_name[0].toUpperCase() + first_name.slice(1).toLowerCase();
    var res = first_name +" " +  last_name;
    return res;
}
