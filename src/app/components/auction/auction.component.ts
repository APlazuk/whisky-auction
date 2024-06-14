import {Component, OnInit} from '@angular/core';
import {Auction, WhiskyControllerService} from "../../openapi";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit {

  auctionInfo: Auction[] = [];

  constructor(private whiskyControllerService: WhiskyControllerService) {
  }

  ngOnInit(): void {
    this.getWhiskyAuctionInfo();
  }

  public getWhiskyAuctionInfo(): void {
    this.whiskyControllerService.getAuctionInfo()
      .subscribe({
        next: (response: Array<Auction>) => {
          this.auctionInfo = response;
          console.log(response)
        },
        error: (error) => console.log(error),
      });
  }

}
