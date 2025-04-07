import './style.css';
import Home from "./views/Home.ts";
import Help from "./views/Help.ts";
import NotFound from "./views/NotFound.ts";

const navigateTo = (url: string) => {
  history.pushState(null, "", url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/404', view: NotFound },
    { path: '/', view: Home },
    { path: '/about', view: Help },
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
  }

  const view = new match.route.view("");
  const appElement = document.querySelector<HTMLDivElement>('#app');

  if (appElement) {
    appElement.innerHTML = await view.getHtml();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (element: any) => {
    if (element.target.matches("[data-link]")) {
      element.preventDefault();
      navigateTo(element.target.href);
    }
  });

  router();
});
