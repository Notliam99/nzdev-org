import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import Home from "./views/Home.ts"
import Help from "./views/Help.ts"
import NotFound from "./views/NotFound.ts"
/* import { setupCounter } from './counter.ts' */

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/404', view: NotFound },
    { path: '/', view: Home },
    { path: '/help', view: Help },
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });
  
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  };
  
  const view = new match.route.view();

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = await view.getHtml();

 /*  console.log(match.route.view()); */
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", element => {
    if (element.target.matches("[data-link]")) {
      element.preventDefault();
      navigateTo(element.target.href);
    }
  });

  router();
});
