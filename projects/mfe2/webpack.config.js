const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'),
    ['@auth-lib','shared-lib'] // <-- Add this entry!  
);
module.exports = {
  output: {
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './projects/mfe2/src/app/app.component.ts',
        './Module': './projects/mfe2/src/app/services-render/services-render.module.ts'
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/platform-browser/animations": { singleton: true, strictVersion: true },
        "@ngxs/store": {singleton: true, strictVersion: true},
             // Uncomment for sharing lib of an Angular CLI or Nx workspace
          //   ...sharedMappings.getDescriptors()
            }
            
        }),
        // Uncomment for sharing lib of an Angular CLI or Nx workspace
        sharedMappings.getPlugin(),
      ],
      };
      