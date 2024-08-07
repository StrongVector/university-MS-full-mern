
# FixMyStreets.ie Wiki!
Welcome to the wiki page for fixmystreets.ie.
Below we have a video walkthrough of the project, screenshots of the pages on the website, and a writeup of the features you may not notice on the first note.

## Merits Attention!
I think the iframes I used in this app merit attention. They add a lot to the project. I'd originally considered using the npm library to create the Google Maps but found using simple HTML with a parsed URL made the application more lightweight and was easier to use.

# Video Walkthrough of the website!


## **What is FixMyStreets.ie??:**

FixMyStreets.ie is a website for citizens to report potholes, broken lights, fallen electric wires and graffiti. The idea is local council officials would use this website to then fix these issues and in time it would both make the life of the council worker easier as well as updating concerned citizens about the bettering situation in their community. I got this idea from a similar website used by (I think) Carlow Couty Council for citizens to report broken street lights. The name 'FixMyStreets.ie' also once was a live website - I could only expect it was a similar website. While this is a basic website I think it does pose a nice idea that could maybe actually be of use in the real world!

## Get started

Install dependencies with :

```shell
npm install
```

Start to react application with :

```shell
npm start
```

## Pages

### HomePage
Nothing super interesting here I'm afraid - this is the homepage to describe what this website's purpose is. I wanted to add a nice banner too but couldn't get it working in time - also found it difficult to find images that would look well in fullscreen.

### Create Complaint Page
This is the page where in theory members of the public would add complaints they have - they must have their coordinates - if I were to make adjustments to this website I'd like to use location services to track the location of the phone so the user doesn't have to input this data. I could've easily done this if I was sure the user was using a Chrome based browser but that isn't something I can be sure of and as this is a project that my grade depends on, I didn't want to risk it. I'd also like to add the ability to upload a photo or video.

At the minute, the inputs are as follows :


Title of the problem => Title that will be shown on task - important it's short and to the point


Describe the problem => a little bit more text so the user can describe in detail the issue


Latitude => the latitude coordinates of the issue


Longitude => the longitude coordinates of the issue


Your contact details => your phone number - this is added into a tel a link so it's important it's a phone number

### Live reports

This is in theory the page where council workers would scroll through for tasks in the area to fix. at first glance, there is just task boxes with limited information available however.

information is as listed:

ID => Id of task in Mongodb

Title of task => the title the citizen inputted

Description => the description the citizen inputted

Status => the status of the task( whether it has been seen, is being worked on, or has been finished)

POC => a phone number - in a phone link so council worker can immediately call the citizen who published the complaint.

Coordinates => Coordinates of the report

Directions to the site => a google maps url loaded with the coordinates - that opens a google maps page to direct the user to the location.

Change state of task => the edit functionality of the task

delete => the delete functionality of the task
