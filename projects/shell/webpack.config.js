const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const sharedMappings = new mf.SharedMappings();

sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'),
    ['shared-lib','@auth-lib'] // <-- Add this entry!  
);
module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/platform-browser": { singleton: true, strictVersion: true },
        "@angular/platform-browser/animations": { singleton: true, strictVersion: true },
        "@ngxs/store": {singleton: true, strictVersion: true},
        "primeng": {singleton: true, strictVersion: true},
        "primeicons": {singleton: true, strictVersion: true},
     // Uncomment for sharing lib of an Angular CLI or Nx workspace
    ...sharedMappings.getDescriptors()
    }
    
}),
// Uncomment for sharing lib of an Angular CLI or Nx workspace
sharedMappings.getPlugin(),
],
};
