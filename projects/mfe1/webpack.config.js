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
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './projects/mfe1/src/app/app.component.ts',
        './Module': './projects/mfe1/src/app/services/services.module.ts'
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
      // ...sharedMappings.getDescriptors()
      }
      
  }),
  // Uncomment for sharing lib of an Angular CLI or Nx workspace
 sharedMappings.getPlugin(),
],
};
