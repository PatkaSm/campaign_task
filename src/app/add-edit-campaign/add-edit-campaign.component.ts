import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CampaignService } from '../services/campaign.service';
import { ModalService } from '../shared/modal/modal.service';
import { NotificationService } from '../shared/notification/notification.service';

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

  /**
   * Towns to select
   */
  towns;

  /**
   * Campaign tags
   */
  tags;

  /**
   * Selected tags
   */
  selectedTags = [];

  /**
   * Form controls
   */
  controls = {
    name: new FormControl('', Validators.required),
    keywords: new FormControl('', Validators.required),
    bidAmount: new FormControl('', Validators.required),
    fund: new FormControl('', Validators.required),
    status: new FormControl(true, Validators.required),
    town: new FormControl(''),
    radius: new FormControl('', Validators.required),
    product: new FormControl('', Validators.required),
  };

  /**
   * Form group
   */
  form = new FormGroup(this.controls);

  /**
   * Products
   */
  products;

  /**
   * Modal id
   */
  modalID = this.modalService.generatedId.toString();

  /**
   * Add/edit campaign component constructor
   * @param activatedRoute Angular activated route
   * @param campaignService Campaign service
   * @param modalService Modal service
   * @param router Angular router
   * @param notificationService Notification service
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    public campaignService: CampaignService,
    public modalService: ModalService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  /**
   * On init get products, towns and tags and get ID from url query to get campaign and assign data to controls
   */
  ngOnInit(): void {
    this.products = this.campaignService
      .getProducts()
      .map((element) => ({ id: element.id, value: element.name }));
    this.towns = this.campaignService.getTowns();
    this.tags = this.campaignService.getKeywords().map((element) => ({
      ...element,
      isChecked: false,
    }));
    this.subscription$.add(
      this.activatedRoute.params.subscribe((param) => {
        this.id = param.id;
        if (this.id) {
          const campaign = this.campaignService
            .getCamaigns()
            .find((element) => Number(element.id) === Number(this.id));
          this.assignToControls(campaign);
        }
      })
    );
  }

  /**
   * Get selected tags
   * @param $event tags from multiselect
   */
  getSelecedTags($event) {
    this.selectedTags = $event.filter((element) => element.isChecked);
  }

  /**
   * Assign data to controls
   * @param campaign campaign data
   */
  assignToControls(campaign) {
    this.controls.name.setValue(campaign.name);
    this.controls.product.setValue(campaign.product.id);
    this.controls.town.setValue(campaign.town.id);
    this.controls.fund.setValue(campaign.fund);
    this.controls.bidAmount.setValue(campaign.bidAmount);
    this.controls.status.setValue(campaign.status);
    this.controls.radius.setValue(campaign.radius);
    this.selectedTags = campaign.keywords.map((element) => ({
      ...element,
      isChecked: true,
    }));
    this.tags.forEach((element) => {
      if (
        campaign.keywords.find((innerElement) => element.id === innerElement.id)
      ) {
        element.isChecked = true;
      }
    });
  }

  /**
   * Submit form
   */
  submit() {
    if (this.form.valid) {
      this.id
        ? this.campaignService.editCampaign(this.id, this.getValues())
        : this.campaignService.addCamaigns(this.getValues());
    } else {
      for (const property in this.controls) {
        if (!this.controls[property].valid) {
          this.controls[property].setErrors({ error: 'To pole jest wymagane' });
        }
      }
    }
  }

  /**
   * Delete campaign
   */
  deleteCampaign() {
    this.campaignService.deleteCampaign(this.id);
    this.router.navigateByUrl('/');
    this.notificationService.send.success('Pomyslnie usunięto kampanię');
    this.modalService.close(this.modalID);
  }

  /**
   * Get data from form controls
   * @returns form values
   */
  getValues() {
    const obj = {
      name: this.controls.name.value,
      keywords: this.selectedTags.map((element) => ({
        id: element.id,
        value: element.value,
      })),
      bidAmount: this.controls.bidAmount.value,
      fund: this.controls.fund.value,
      status: this.controls.status.value,
      town: this.towns.find(
        (element) => element.id === this.controls.town.value
      ),
      radius: this.controls.bidAmount.value,
      product: this.campaignService
        .getProducts()
        .find((element) => element.id === Number(this.controls.product.value)),
      id: this.id ? this.id : this.campaignService.generateID(),
    };
    return obj;
  }
}
