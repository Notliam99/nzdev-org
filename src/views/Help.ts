import AbstractView from "./AbstractView.ts"

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  getHtml () {
    return `
      <h1>Help page</h1> 
    `;
  }
}
