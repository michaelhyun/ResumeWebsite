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
	"skills" : HTMLskills.replace("%data%", skills.join(", "))
};


var work = {
	"jobs" : [
	{
		"employer" : HTMLworkEmployer.replace("%data%", "NASA Ames Research Center"),
		"title" : HTMLworkTitle.replace("%data%", "Software Engineering in Test, Intern"),
		"dates" : HTMLworkDates.replace("%data%", "September 2016 - December 2016"),
		"location" : HTMLworkLocation.replace("%data%", "Moffet Field Research Center, Mountain View, CA"),
		"description" : HTMLworkDescription.replace("%data%", "hello")
	},
	{
		"employer" : HTMLworkEmployer.replace("%data%", "All That Barbeque"),
		"title" : HTMLworkTitle.replace("%data%", "Server"),
		"dates" : HTMLworkDates.replace("%data%", "June 2015 - October 2015"),
		"location" : HTMLworkLocation.replace("%data%", "Cupertino, CA"),
		// "description" : HTMLworkDescription.replace("%data%", "hello")
	}
	]
}


var projects = {
	"projects" : [
		{
			"name" : HTMLprojectTitle.replace("%data%", "Clubhub"),
			"dates" : HTMLprojectDates.replace("%data", "January 2016 - June 2016"),
			"description" : HTMLprojectDescription.replace("%data%", ""),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		},
		{
			"name" : HTMLprojectTitle.replace("%data%", "Java Swing Whitebaord GUI"),
			"dates" : HTMLprojectDates.replace("%data", "November 2016 - December 2016"),
			"description" : HTMLprojectDescription.replace("%data%", ""),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		},
		{
			"name" : HTMLprojectTitle.replace("%data%", "Robot Project"),
			"dates" : HTMLprojectDates.replace("%data", "November 2014 - December 2014"),
			"description" : HTMLprojectDescription.replace("%data%", ""),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		},
		{
			"name" : HTMLprojectTitle.replace("%data%", "Library WebApp"),
			"dates" : HTMLprojectDates.replace("%data", "November 2015 - December 2015"),
			"description" : HTMLprojectDescription.replace("%data%", ""),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		}
	]

}

var education = {
	"school" : HTMLschoolName.replace("%data%", "San Jose State University"),
	"degree" : HTMLschoolDegree.replace("%data%", "BSSE"),
	"dates" : HTMLschoolDates.replace("%data%", "August 2014 - May 2018 (Expected)"),
	"location" : HTMLschoolLocation.replace("%data%", "San Jose, CA 95112"),
	"major" : HTMLschoolMajor.replace("%data%", "Software Engineering BSSE")
}


 $("#header").append(bio.name);
 $("#header").append(bio.role);

// $("#main").append(HTMLcontactGeneric.replace("%contact%", bio.contact));
$("#header").append(bio.picture);

$("#header").append(HTMLskillsStart);
$("#header").append(bio.skills);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(work.jobs);

$("#projects").append(HTMLprojectStart);
$("#projects").append(projects.projects);


$("#education").append(HTMLschoolStart);
$("#education").append(education.school);


// $("#mapDiv").append(googleMap);
// $("#mapDiv").append(internationalizeButton);
















