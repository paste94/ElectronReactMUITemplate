# Electron React with MUI and Routing for navigation
This is a boilerplate for quickly start development of an Electron React MUI and Routing application. This app provides you everything needed for starting create an application with Sidebar, Router and a list of Pages which can be navigated. 

# Application Structure
This Application comes with a `src` folder in which you can find everything you need. Let's see them one by one and take a look at their logic:
## Main Folder
This folder contains `DAO` which is used for creating connection with your own database and `utils` where you can put all your utils components or functions. You can find under `utils/Confirmation.tsx` an utility for confirmation modals. 
## Renderer folder
Here you can find the real core of all application. The `App.css`, `App.tsx`, `index.tsx`, `index.ejs`, `preload.d.ts` files comes from React Electron Boilerplate and you can see their functionalities [here](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
### Pages folder
Here you can add pages that must be rendered in the application. In this exmple there are three pages: Home, Users and Settings. 
### Routes folder
There is the core of this library. Here there are a lot of customized files that creates the material template using MUI and Routes libraries. 
- `AppDrawer.tsx` defines the AppDrawer Component. This lets you create the right AppDrawer
- `AppRoutesMaterial.tsx` defines the routes objects 
- `Elements.tsx` defines the elements to visualize in the sidebar defining icons, paths, names and main pages.
- `ListItems.tsx`defines the elements shown inside the AppDrawer
- `TopAppBar.tsx` defines the top app bar (the one in blue) in each page

# Instalation guide
To install this template you need install Node in your PC, then run 
- `npm install` to install all dependencies
- `npm start` to start program

# Packaging
To package your program, creating an instllation file, you must run `npm package`. You can check all settings in the React Electron Boilerplate documentation [here](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

# Citation to other repositories
- [Electron JS](https://www.electronjs.org)
- [React JS](https://reactjs.org)
- [React Electron Boilerplate](https://electron-react-boilerplate.js.org)
- [MUI](https://mui.com)
- [React Router](https://reactrouter.com)
