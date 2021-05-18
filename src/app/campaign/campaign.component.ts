import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent {
  /**
   * Campaign data
   */
  @Input() campaign;

  constructor() {}
}
