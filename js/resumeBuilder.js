/*
This is empty on purpose! Your code to build the resume will go here.
 */




var welcomeMessage = "Welcome to my Personal Website!";
var skills = ["Java", "Python", "Ruby", "Object Oriented Design", "Data Structures", "Algorithms"];

var bio = {
	"name" : HTMLheaderName.replace("%data%", "Michael Hyun"),
	"role" : HTMLheaderRole.replace("%data%", "Software Engineer at San Jose State University"),
	"contact" : {
		"Mobile" : HTMLmobile.replace("%data%", "(408) 489 - 6868"),
		"Email"  : HTMLemail.replace("%data%", "michael.hyun3@gmail.com"),
		"LinkedIn" : HTMLlinkedin.replace("%data%", "https://www.linkedin.com/in/michael-hyun-728979aa"),
		"Github" : HTMLgithub.replace("%data%", "https://github.com/michaelhyun")
	},
	"picture" : HTMLbioPic.replace("%data%", "images/self.jpg"),
	"welcomeMessage" : HTMLwelcomeMsg.replace("%data%", welcomeMessage),
	"skills" : HTMLskills.replace("%data%", skills)
};

var jobs = ["Software Engineering in Test, Intern", "Server"]


var work = {}
work.jobs = HTMLworkTitle.replace("%data%", jobs);
work.dates = HTMLworkDates.replace("%data%", "September 2016 - December 2016");
work.employer = HTMLworkEmployer.replace("%data%", "NASA Ames Research Center");
work.location = HTMLworkLocation.replace("%data%", "Moffet Field Research Center, Mountain View, CA");
work.description = HTMLworkDescription.replace("%data%", "hello");
//DESCRIPTION FILL IN



var education = {}
education["school"] = HTMLschoolName.replace("%data%", "San Jose State University"),
education["degree"] = HTMLschoolDegree.replace("%data%", "BSSE");
education["dates"] = HTMLschoolDates.replace("%data%", "August 2014 - May 2018 (Expected)");
education["location"] = HTMLschoolLocation.replace("%data%", "San Jose, CA 95112");
education["major"] = HTMLschoolMajor.replace("%data%", "Software Engineering BSSE");

 $("#header").append(bio.name);
 $("#header").append(bio.role);

// $("#main").append(HTMLcontactGeneric.replace("%contact%", bio.contact));
$("#header").append(bio.picture);

$("#header").append(HTMLskillsStart);
$("#header").append(bio.skills);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(work.jobs);

$("#education").append(HTMLschoolStart);
$("#education").append(education.school);














