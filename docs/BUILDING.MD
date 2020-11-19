#  How to compile XStore

Now, XStore uses Webpack + Forge to compile the project. So:

To compile XStore in dev mode, dev will do the job for you.

`npm run dev` will compile the main source code, then the renderer and start electron forge.

`npm run package` will package both Webpack and Electron in production mode.

`npm run make` will make electron binaries.

There are other commands available in the package.json. Go check them out!