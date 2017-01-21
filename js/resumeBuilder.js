/*
This is empty on purpose! Your code to build the resume will go here.
 */




var welcomeMessage = "Welcome to my Personal Website!";


var bio = {
	"name" : HTMLheaderName.replace("%data%", "Michael Hyun"),
	"role" : HTMLheaderRole.replace("%data%", "Software Engineer at San Jose State University"),
	"contacts" : {
		"Mobile" : HTMLmobile.replace("%data%", "(408) 489 - 6868"),
		"Email"  : HTMLemail.replace("%data%", "michael.hyun3@gmail.com"),
		"LinkedIn" : HTMLlinkedin.replace("%data%", "https://www.linkedin.com/in/michael-hyun-728979aa"),
		"Github" : HTMLgithub.replace("%data%", "https://github.com/michaelhyun"),
		"location" : "San Jose, CA"
	},
	"picture" : HTMLbioPic.replace("%data%", "images/self.jpg"),
	"welcomeMessage" : HTMLwelcomeMsg.replace("%data%", welcomeMessage),
	"skills" : ["Java", "Python", "Ruby", "Object Oriented Design", "Data Structures", "Algorithms"]
};


var work = {
	"jobs" : [
	{
		"employer" : HTMLworkEmployer.replace("%data%", "NASA Ames Research Center"),
		"title" : HTMLworkTitle.replace("%data%", "Software Engineering in Test, Intern"),
		"dates" : HTMLworkDates.replace("%data%", "September 2016 - December 2016"),
		"location" : "Mountain View, CA",
		"description" : HTMLworkDescription.replace("%data%", "hello")
	},
	{
		"employer" : HTMLworkEmployer.replace("%data%", "All That Barbeque"),
		"title" : HTMLworkTitle.replace("%data%", "Server"),
		"dates" : HTMLworkDates.replace("%data%", "June 2015 - October 2015"),
		"location" : "Cupertino, CA",
		"description" : HTMLworkDescription.replace("%data%", "hello")
	}
	]
}


var projects = {
	"projects" : [
		{
			"name" : HTMLprojectTitle.replace("%data%", "Clubhub"),
			"dates" : HTMLprojectDates.replace("%data%", "January 2016 - June 2016"),
			"description" : HTMLprojectDescription.replace("%data%", "hello"),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		},
		{
			"name" : HTMLprojectTitle.replace("%data%", "Java Swing Whitebaord GUI"),
			"dates" : HTMLprojectDates.replace("%data%", "November 2016 - December 2016"),
			"description" : HTMLprojectDescription.replace("%data%", "hello"),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		},
		{
			"name" : HTMLprojectTitle.replace("%data%", "Robot Project"),
			"dates" : HTMLprojectDates.replace("%data%", "November 2014 - December 2014"),
			"description" : HTMLprojectDescription.replace("%data%", "hello"),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		},
		{
			"name" : HTMLprojectTitle.replace("%data%", "Library WebApp"),
			"dates" : HTMLprojectDates.replace("%data%", "November 2015 - December 2015"),
			"description" : HTMLprojectDescription.replace("%data%", "hello"),
			//FILL IN DESCRIPTION
			"image" : HTMLprojectImage.replace("%data%", "")
			//FILL IN IMAGES
		}
	]

}

var education = {
	"schools" : [
	{
	"school" : HTMLschoolName.replace("%data%", "San Jose State University"),
	"degree" : HTMLschoolDegree.replace("%data%", "BSSE"),
	"dates" : HTMLschoolDates.replace("%data%", "August 2014 - May 2018 (Expected)"),
	"location" : HTMLschoolLocation.replace("%data%", "San Jose, CA"),
	"major" : HTMLschoolMajor.replace("%data%", "Software Engineering")
	}
	]
}


function displaySkills(){
if(bio.skills.length > 0 ){
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		$("#header").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
}
}

function displayWork(){
	if(work.jobs.length > 0){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var title = work.jobs[job].title;
		var employer = work.jobs[job].employer;
		var dates = work.jobs[job].dates;
		var locations = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var description = work.jobs[job].description;

		var formattedJob = employer + " " + title + locations;

		$(".work-entry:last").append(formattedJob);
		$(".work-entry:last").append(dates);
		$(".work-entry:last").append(description);
	}
}
}

projects.display = function(){

		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var names = projects.projects[project].name;
			var date = projects.projects[project].dates;
			var descriptions = projects.projects[project].description;
			var images = projects.projects[project].image;

			$(".project-entry:last").append(names);
			$(".project-entry:last").append(date);
			$(".project-entry:last").append(descriptions);
			$(".project-entry:last").append(images);
		}
	
}


function displayEducation(){
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(education.schools[0].location);
	$(".education-entry:last").append(education.schools[0].school);
	$(".education-entry:last").append(education.schools[0].dates);
	$(".education-entry:last").append(education.schools[0].major);
	$(".education-entry:last").append(education.schools[0].degree);

}

function inName(name){
	names = name.split(" ");
	var last = names[1];
	var first = names[0];
	last = last.toUpperCase();
	first = first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase();
	var name = first + " " + last;
	return name;
}


$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.welcomeMessage);
$("#main").append(internationalizeButton);

$("#header").append(bio.picture);

displaySkills();
displayWork();
projects.display();
displayEducation();





$("#mapDiv").append(googleMap);
// $("#mapDiv").append(internationalizeButton);
















