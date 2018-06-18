# Primo Studio Add-on tutorial

Before we start the tutorial lets agree on a few definitions:
- {npm-id}: The name of your add-on as published to NPM. In this tutorial: primo-studio-addon-tutorial
- {npm-id-camel-case}: {npm-id} converted to camel case. In this tutorial: primoStudioAddonTutorial
- {primo-hook}: An existing HTML element embedded in the Primo New UI HTML. On this element angular will render our add-on. In this tutorial we are using: prm-search-bar-after
- {main-component}: The angular component which will be placed directly under the {primo-hook}. Note that this component's HTML template could call additional angular components. 

1. Create an add-on using the [primo explore package template](https://github.com/ExLibrisGroup/primo-explore-package)
  we recommend using the [primo devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) for development. 
  Primo studio add-ons must observe the following restrictions:
   1.	Component template html must be inline and not in a separate file.
   2.	Use only a single primo-hook as a selector for your angular component. This is because Primo Studio generates code for a specific hook in order to allow installation of a few add-ons on the same primo-hook.
   3. If you create a new module for your component, add the following code: ```app.requires.push('name of new module');```
   
   Some add-ons allow the user to configure parameters when installing them in Primo-Studio. To access those parameters you must inject a service called {npm-id-camel-case}StudioConfig.
   In our example: 
   
   ```
   app.controller('primoStudioAddonTutorialController', ['primoStudioAddonTutorialStudioConfig',function (addonParameters) {
   ```
   
   and then we retrieve the 'text' parameter with the code: 
```
        function getConfiguredText(){
   		return addonParameters[0].text;
   	}
   
```

2. copy the VIEW_CODE folder where your customization sits to a new location. 
The js folder must contain a single js file:
    1. if you are using the [primo devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) for development remove all js files except for the custom.js file.
    2. If you are not using [primo devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) for development, all your js code must be bundled to a single file. Delete all files except for the bundle js file.
    You can use concatenation, [browserify](http://browserify.org/), [webpack](https://webpack.js.org/) or any other bundling method for creating the bundle js file.

    Rename your single js file to {npm-id-camel-case}.js. In this tutorial the js folder contains a single js file called 'primoStudioAddonTutorial.js'
3. In your js file rename your {primo-hook} component as {npm-id-camel-case}. This is now your {main-component}. 
In this tutorial the following is our {main-component}:
    ```
    app.component('primoStudioAddonTutorial', {
    ```     
4. At this point your add-on is ready to be [published to NPM](https://eladnava.com/publishing-your-first-package-to-npm/).

5. To publish your add-on to Primo Studio see this link: 
> https://github.com/primousers/primostudio  
