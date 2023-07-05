import AbstractView from "./AbstractView.ts"

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  getHtml () {
    return `
      <h1>This is the index of the site.</h1>
      <p>
        the center of the hole website lies here.
        very cool the beast would say mr ...
        beast
      </p>
      <a href="/help" data-link>help page</a>
    `;
  }
}
