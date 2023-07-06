import AbstractView from "./AbstractView.ts"

export default class extends AbstractView {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  getHtml (): any {
    return `
      <h1>Help page</h1> 
    `;
  }
}
