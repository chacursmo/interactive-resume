/*
This is empty on purpose! Your code to build the resume will go here.
*/

var abilities = ["HTML", "CSS", "Javascript", "Photography", "Visual Design", "C/Python Programming"];

var bio = { "name": "Sam Crouch",
	    "role": "Front End Web Developer",
	    "contacts": {
		"mobile": "254-205-1317",
		"email": "chacursmo@gmail.com",
		"github": "chacursmo",
		"twitter": "@chacursmo",
		"location": "Itasca, Texas"
	    },
	    "bioPic": "/images/me.jpg",
	    "welcomeMessage": "Greetings my friend; shall we be informal?",
	    "skills": abilities
	  };

var work = { "jobs":
	     [{
		 "title": "Technology Facilitator",
		 "employer": "Alvarado ISD",
		 "location": "Alvarado, Texas",
		 "dates" : "2005-2006",
		 "description": "Supported Two Campus' Adminitrators and Faculties within a mid-size school district in a rural area. Developed scripts to maintain software productivity. In concert with School Teachers generated STEM classroom content. Implemented conversion of <strong>www.alvaradoisd.net</strong> web site into open source content management system."
	     }]};

var education = { "schools": [
    { "name": "University of Texas",
      "degree dates": "2012",
      "major": ["Religious Studies"],
      "url": "www.utexas.edu",
      "location": "Austin, Texas"
    },
    { "schoolName": "Udacity",
      "deree dates": 2016,
      "major": "Front End Web Development",
      "url": "www.udacity.com"
    }]};

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
    for (var ind in bio.skills) {
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[ind]);
	$("#skills").append(formattedSkills);
    }
};

function displayWork() {

    for (var index in work.jobs) {
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
};


displayWork();

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
};



var projects = { "ind_projects":
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
		  }]};

projects.display = function() {
    for (var index in projects.ind_projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.ind_projects[index].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.ind_projects[index].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.ind_projects[index].description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.ind_projects[index].image);
	$(".project-entry:last").append(formattedProjectImage);
    };
};

projects.display();


$("#mapDiv").append(googleMap);
