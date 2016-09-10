import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'racing-app',
  template: `
  <main><router-outlet></router-outlet></main>
`,
  directives: [ROUTER_DIRECTIVES],
  providers:[HTTP_PROVIDERS]
})
export class AppComponent {
}
