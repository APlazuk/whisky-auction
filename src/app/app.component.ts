import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuctionComponent} from "./components/auction/auction.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuctionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'whisky-auction';
}
