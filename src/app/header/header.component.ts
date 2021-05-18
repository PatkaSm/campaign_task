import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * Header component constructor
   * @param campaignService Campaign service
   */
  constructor(public campaignService: CampaignService) {}

  ngOnInit(): void {}
}
