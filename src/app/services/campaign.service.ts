import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  /**
   * Budget
   */
  budget = 10000;

  /**
   * Keywords
   */
  keywords = [
    { id: 1, value: 'Cras' },
    { id: 2, value: 'interdum' },
    { id: 3, value: 'augue' },
    { id: 4, value: 'Donec' },
    { id: 5, value: 'semper' },
  ];

  /**
   * Towns
   */
  towns = [
    { id: '1', value: 'Warszawa' },
    { id: '2', value: 'Lublin' },
    { id: '3', value: 'Krakow' },
    { id: '4', value: 'Wrocław' },
    { id: '5', value: 'Chorzów' },
    { id: '6', value: 'Katowice' },
    { id: '7', value: 'Łódź' },
    { id: '8', value: 'Gdańsk' },
    { id: '9', value: 'Białystok' },
  ];

  /**
   * Products
   */
  products = [
    {
      id: 1,
      name: 'Pellentesque non quam blandit',
      image:
        'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg',
      price: '200',
      description: 'Description',
      date: new Date(),
    },
    {
      id: 2,
      name: 'Donec interdum aliquam tortor quis',
      price: '300',
      image:
        'https://cdn.pixabay.com/photo/2019/12/23/08/15/orange-jacket-4714097_960_720.jpg',
      description: 'Description 2',
      date: new Date(),
    },
    {
      id: 3,
      name: 'Sed eleifend tempus odio',
      price: '400',
      image:
        'https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg',
      description: 'Description 3',
      date: new Date(),
    },
  ];

  /**
   * Campaigns
   */
  campaigns = [
    {
      id: 1,
      name: 'Cras at sem in augue interdum semper',
      fund: '200',
      keywords: [
        { id: 1, value: 'Cras' },
        { id: 2, value: 'interdum' },
      ],
      description: 'Description',
      status: true,
      town: { id: '1', value: 'Warszawa' },
      radius: '100',
      product: this.products[0],
      bidAmount: '123123',
    },
    {
      id: 2,
      name: 'Etiam vitae auctor arcu',
      fund: '300',
      keywords: [
        { id: 1, value: 'Cras' },
        { id: 2, value: 'interdum' },
      ],
      description: 'Description 2',
      status: true,
      town: { id: '9', value: 'Białystok' },
      radius: '50',
      product: this.products[1],
      bidAmount: '123123',
    },
    {
      id: 3,
      name: 'Donec tincidunt consectetur urna sed efficitur',
      fund: '400',
      keywords: [
        { id: 3, value: 'augue' },
        { id: 4, value: 'Donec' },
        { id: 5, value: 'semper' },
      ],
      description: 'Description 3',
      status: false,
      town: { id: '8', value: 'Gdańsk' },
      radius: '30',
      product: this.products[2],
      bidAmount: '123123',
    },
    {
      id: 4,
      name: 'Cras nulla mi, tristique eget facilisis quis',
      fund: '200',
      keywords: [
        { id: 3, value: 'augue' },
        { id: 4, value: 'Donec' },
        { id: 5, value: 'semper' },
      ],
      description: 'Description 4',
      status: true,
      town: { id: '6', value: 'Katowice' },
      radius: '100',
      product: this.products[0],
      bidAmount: '123123',
    },
    {
      id: 5,
      name: 'Etiam in magna dapibus, cursus orci id, mattis quam',
      fund: '300',
      keywords: [
        { id: 1, value: 'Cras' },
        { id: 2, value: 'interdum' },
        { id: 3, value: 'augue' },
      ],
      description: 'Description 5',
      status: true,
      town: { id: '4', value: 'Wrocław' },
      radius: '50',
      product: this.products[1],
      bidAmount: '123123',
    },
    {
      id: 6,
      name: 'Nunc cursus ornare auctor',
      fund: '400',
      keywords: [
        { id: 1, value: 'Cras' },
        { id: 2, value: 'interdum' },
        { id: 3, value: 'augue' },
        { id: 4, value: 'Donec' },
        { id: 5, value: 'semper' },
      ],
      description: 'Description 6',
      status: false,
      town: { id: '4', value: 'Wrocław' },
      radius: '30',
      product: this.products[2],
      bidAmount: '123123',
    },
  ];

  /**
   * Campaign service constructor
   * @param notificationService Notification service
   * @param router Angular router
   */
  constructor(
    public notificationService: NotificationService,
    private router: Router
  ) {}

  /**
   * Get campaigns
   * @returns campaigns
   */
  getCamaigns() {
    return this.campaigns;
  }

  /**
   * Get products
   * @returns products
   */
  getProducts() {
    return this.products;
  }

  /**
   * Add new campaign
   * @param data campaign data
   */
  addCamaigns(data) {
    if (this.budget >= data.fund) {
      this.reduceBudget(data.fund);
      this.campaigns.push(data);
      this.notificationService.send.success('Pomyslnie zapisano');
      this.router.navigateByUrl('/');
    } else {
      this.notificationService.send.error('Niewystarczający budżet');
    }
  }

  /**
   *Edit campaign
   * @param id campaign ID
   * @param data  campaign data
   */
  editCampaign(id, data) {
    this.campaigns = this.campaigns.map((element) => {
      if (
        Number(element.id) === Number(id) &&
        this.budget >= Number(element.fund)
      ) {
        this.reduceBudget(Number(data.fund) - Number(element.fund));
        this.notificationService.send.success('Pomyslnie zapisano');
        this.router.navigateByUrl('/');
        return data;
      } else if (
        Number(element.id) === Number(id) &&
        this.budget < Number(element.fund)
      ) {
        this.notificationService.send.error('Niewystarczający budżet');
        return element;
      } else if (
        Number(element.id) === Number(id) &&
        Number(data.fund) === Number(element.fund)
      ) {
        this.notificationService.send.success('Pomyslnie zapisano');
        this.router.navigateByUrl('/');
        return data;
      } else return element;
    });
  }

  /**
   * Delete campaign
   * @param id campaign to delete id
   */
  deleteCampaign(id) {
    this.campaigns = this.campaigns.filter((e) => Number(e.id) !== Number(id));
  }

  /**
   * Get keywords
   * @returns keywords
   */
  getKeywords() {
    return this.keywords;
  }

  /**
   * Get towns
   * @returns towns
   */
  getTowns() {
    return this.towns;
  }

  /**
   * Generate ID
   * @returns generate new ID
   */
  generateID() {
    const latestID = this.campaigns[this.campaigns.length - 1].id;
    return latestID + 1;
  }

  /**
   * Get budget
   * @returns budget
   */
  getBudget() {
    return this.budget;
  }

  /**
   * Reduce budget
   * @param value value to reduce
   */
  reduceBudget(value) {
    this.budget -= Number(value);
  }
}
