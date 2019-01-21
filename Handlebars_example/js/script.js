$(function () {
// 1. pull in template
var source = $("#some-template").html(); 

// 2.Compile the string into a function
var template = Handlebars.compile(source); 

var data = { 
    users: [ { 
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa" 
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "Photographer",
        twitter: "photobasics"
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "LEGO Geek",
        twitter: "minifigures"
    } ]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

// 3.Input response into the function & append to page
$('body').append(template(data));
});
