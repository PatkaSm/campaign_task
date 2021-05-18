import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CampaignService } from '../services/campaign.service';
import { ModalService } from '../shared/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * Campaigns
   */
  campaigns;

  /**
   * Home component constructor
   * @param campaignService Campaign service
   */
  constructor(public campaignService: CampaignService) {}

  /**
   * On init get campaigns
   */
  ngOnInit(): void {
    this.campaigns = this.campaignService.getCamaigns();
  }
}
