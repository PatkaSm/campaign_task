import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-campaign',
  templateUrl: './add-edit-campaign.component.html',
  styleUrls: ['./add-edit-campaign.component.scss'],
})
export class AddEditCampaignComponent implements OnInit {
  /**
   * Sbscription
   */
  subscription$: Subscription = new Subscription();

  /**
   * Camaign id
   */
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription$.add(
      activatedRoute.params.subscribe((param) => {
        this.id = param.id;
        if (this.id) {
          // załaduj dane kampani
        }
      })
    );
  }

  ngOnInit(): void {}
}
