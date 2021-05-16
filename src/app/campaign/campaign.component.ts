import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  @Input() campaign;

  constructor() {}

  ngOnInit(): void {}
}
