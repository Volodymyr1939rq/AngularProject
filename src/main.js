"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("./app/app.config");
var app_component_1 = require("./app/app.component");
(0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, app_config_1.appConfig)
    .catch(function (err) { return console.error(err); });
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
var user = {
    role: EnumRoles.USER,
    color: 0 /* EnumColors.black */
};
