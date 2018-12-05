# parlAI

## How to configure and run the Angular application.

### Things to install (in that order): 
1. [Node JS & NPM](https://nodejs.org/en/) - does not need any commands, just download and install.
2. [Angular CLI](https://cli.angular.io/) - open a terminal (folder does not matter), run: npm install -g @angular/cli
3. The packages of the application. These are configured in 'src/frontend/parlai-app/package.json', and it's usually when everything breaks :-P
    - Open a terminal **in the project folder(src/frontend/parlai-app)** - 'cd' to navigate folders, 'ls'(mac) or 'dir'(windows) to check which folder you're currently in.
    - Once you're in the correct folder, run 'npm install'. It will install all the packages and might take some minutes.
4. Once the installations are done, open a terminal in the project folder (src/frontend/parlai-app) and run 'ng serve'. You should get a message 'compiled successfully' and some information on how to access the project in the browser. It's usually http://localhost:4200/ but you get a message from the cli telling you the exact url.
5. In that page you should see the welcome page of the mockup. If not, open the developer tools and see what's wrong.

### Fantastic Components & Where to Find Them
A component is a triplet of .html, .css and .ts files (ignore spec.ts file) that defines a part of the application (Lincy: similar to MVC in .NET). The .ts files are typescript files but you are free to write javascript in them. What's best is that the .ts file of each component is automatically bound to the .html file. So you can easily write logic for the frontend in those files.

For now, we will treat each page as a single component because it's easier to get started and there is no reason not to do so to be honest.

Assuming you are in the project folder, you will find the components in 'src/app/' under the folders. Those outside of the folders are the basic angular components and their configuration.

I added the following components for now:
- start: the welcome message and start button
- upload: where the user uploads a question
- question-inspect: the whole select question, view entities process
- document-view: for when you need to view an article
- question-compose: when you move on with writing the question
- question-submitted: the final message when you're done.

I also added a nav bar to quickly navigate through the components. In case you want to test layouts, comment out the whole \<nav\> tag on app.component.html

I will later add instructions on generating new components.

### How to add new controls
We use [Angular Material](https://material.angular.io) for the controls, for the nice, flat style. The documentation is great to get you started. 

There are buttons, check boxes, lists, whatever you need to add in a page you can find it there.

### How to see the controls you added
After you run ng-serve and you see the initial screen, you don't have to worry about it again(most of the times). If you change a component's html/css/ts and you save the file, it will automatically recompile and refresh the page, so your change is immediately visible.

There are some special cases in which you need to re-run 'ng serve', for example when you install a new package or add new external modules but for now you don't have to worry about it.

