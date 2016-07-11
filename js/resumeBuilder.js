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
	    "biopic": "/images/me.jpg",
	    "welcomeMessage": "Greetings my friend; shall we be informal?",
	    "skills": abilities
	  };

var work = { "jobs":
	     [{
		 "title": "Technology Facilitator",
		 "employer": "Alvarado ISD",
		 "location": "Alvarado, Texas",
		 "dates" : "2005-2006",
		 "description": ""
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

HTMLheaderName;
HTMLheaderRole;

if (jQuery.isEmptyObject(bio) === false) {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLskills);
    console.log("foobee");
};
