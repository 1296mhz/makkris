/**
 * Created by cshlovjah on 21.07.16.
 */
var fs = require('fs');
var api = require('./api.json');
var _ = require('underscore');
var log = require('../libs/log')(module);



_.each(api.routes.routeName, function (name) {

    function upperCaseName(name) {

        var methodArray = name.split('');
        var methodFirstSymbol = methodArray[0].toUpperCase();
        methodArray.splice(0, 1, methodFirstSymbol);
        return methodArray.join('');
    }
    
    //Route
    var textRouteHeader = fs.readFileSync(api.routes.requiresHeader, 'utf8');
    textRouteHeader = textRouteHeader.replace(/<%name%>/g, name); 
    fs.writeFileSync(api.routes.routerPath+"/"+ name + ".js", textRouteHeader);
        
    _.each(api.routes.routesMiddleware, function (object) {
        var fileTemplate = api.routes.routesFunctions[object.method + object.scope];
        var textMethod = fs.readFileSync(fileTemplate, 'utf8');

        textMethod = textMethod.replace(/<%Name%>/g, upperCaseName(name));
        textMethod = textMethod.replace(/<%name%>/g, name);
 
        fs.appendFileSync(api.routes.routerPath+"/"+ name + ".js", textMethod);
     
  
    });
    fs.appendFileSync(api.routes.routerPath+"/"+ name + ".js", "\nmodule.exports = router;");
    
    //Controller
    var textControllerHeader = fs.readFileSync(api.controllers.requiresHeader, 'utf8');
    fs.writeFileSync(api.routes.controllerPath+"/"+ name + ".js", textControllerHeader);

    _.each(api.routes.routesMiddleware, function (object) {
        var fileTemplate = api.controllers.controllerFunctions[object.method + object.scope];
        var textMethod = fs.readFileSync(fileTemplate, 'utf8');

        textMethod = textMethod.replace(/<%Name%>/g, upperCaseName(name));
        textMethod = textMethod.replace(/<%name%>/g, name);
        fs.appendFileSync(api.routes.controllerPath+"/"+ name + ".js", textMethod);

    });
});


    

  

    



