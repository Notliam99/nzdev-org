import AbstractView from "./AbstractView.ts"
import template from "./help.html?raw"

export default class extends AbstractView {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  getHtml (): any {
    console.log(template);
    return template;
  }
}
