# coderSchoolNotes

theCoderSchool applet. built using angular. 

Setting up Angular:
    Can use the command "ng --version" to test whether Angular CLI is downloaded or not. 

    To setup a new Angular CLI project, use the command "ng new [name_of_app]"
        Can add certain flags such as "routing=true"

    If you're missing the @angular-devkit/build-angular, then you can use this command in order to download it: 
    "npm install --save-dev @angular-devkit/build-angular". Then you can check again using "ng --version"
        Now the package.json contains 2 different versions of this @angular-devkit/build-angular, you can update it on both devices or 
	just leave it?

    Next, I generate a new component using the command "ng generate component [component_name]" or "ng g c [component_name]". I had to then go into the app.routing in order to
    change the path for the new component and also had to go into the app.component.html and switch out all of the starter/default code with 
    "<router-outlet></router-outlet>"