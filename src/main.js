import Home from "./views/home.js";
import About from "./views/about.js";
import Projects from "./views/projects.js";

export const routes = [
      { path: "/", view: Home },
      { path: "/home", view: Home },
      { path: "/about", view: About },
      { path: "/projects", view: Projects },
];

export const root = document.getElementById("root");