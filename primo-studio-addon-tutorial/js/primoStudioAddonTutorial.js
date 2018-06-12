
/*in order to access the parameters configured when installing this addon 
we inject a service called npm-id in camel case concated to 'StudioConfig'*/
app.controller('primoStudioAddonTutorialController', ['primoStudioAddonTutorialStudioConfig',function (addonParameters) {
	
    var vm = this;
	
	vm.configuredText = getConfiguredText();
	
	function getConfiguredText(){
		return addonParameters[0].text;
	}

}]);



//the name of the component must be the npm-id in camel case
app.component('primoStudioAddonTutorial', {
    bindings: {parentCtrl: '<'},
    controller: 'primoStudioAddonTutorialController',
    template: `
            <div layout="row" layout-align="center center">
				<span>{{$ctrl.configuredText}}</span>
             </div>
`

});
