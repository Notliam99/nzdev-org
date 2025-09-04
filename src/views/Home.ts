import AbstractView from "./AbstractView.ts"

export default class extends AbstractView {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  getHtml (): any {
    return `
      <h1><a style="color: grey;" href="nzdev.org">NZDEV.ORG</a></h1>
      <h2>This is the index of the site.</h2>
      <p>
        the center of the hole website lies here.
        <b>very cool!!!</b> Check The About Down Bellowwwww.
      </p>
      <a href="/about" data-link>About (<b>Nz Dev</b>)</a>
    `;
  }
}
