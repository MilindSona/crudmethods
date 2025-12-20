import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
//import { RouterLink } from '../../node_modules/@angular/router/types/_router_module-chunk';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crudmethods');
}
