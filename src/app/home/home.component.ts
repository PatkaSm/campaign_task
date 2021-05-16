import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  controls = {
    search: new FormControl(''),
  };
  paginator = {
    results: [],
  };
  searchForm = new FormGroup(this.controls);
  products = [
    {
      name: 'Pellentesque non quam blandit',
      image:
        'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg',
      price: '200',
      description: 'Description',
      date: new Date(),
    },
    {
      name: 'Donec interdum aliquam tortor quis',
      price: '300',
      image:
        'https://cdn.pixabay.com/photo/2019/12/23/08/15/orange-jacket-4714097_960_720.jpg',
      description: 'Description 2',
      date: new Date(),
    },
    {
      name: 'Sed eleifend tempus odio',
      price: '400',
      image:
        'https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg',
      description: 'Description 3',
      date: new Date(),
    },
  ];

  campaigns = [
    {
      id: 1,
      name: 'Cras at sem in augue interdum semper',
      fund: '200',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Description',
      status: true,
      town: 'Katowice',
      radius: '100',
      product: this.products[0],
    },
    {
      id: 2,
      name: 'Etiam vitae auctor arcu',
      fund: '300',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Description 2',
      status: true,
      town: 'Warszawa',
      radius: '50',
      product: this.products[1],
    },
    {
      id: 3,
      name: 'Donec tincidunt consectetur urna sed efficitur',
      fund: '400',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Description 3',
      status: false,
      town: 'Kraków',
      radius: '30',
      product: this.products[2],
    },
    {
      id: 4,
      name: 'Cras nulla mi, tristique eget facilisis quis',
      fund: '200',
      tags: ['tag1', 'tag2', 'tag3', 'tag1', 'tag2', 'tag3'],
      description: 'Description 4',
      status: true,
      town: 'Katowice',
      radius: '100',
      product: this.products[0],
    },
    {
      id: 5,
      name: 'Etiam in magna dapibus, cursus orci id, mattis quam',
      fund: '300',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Description 5',
      status: true,
      town: 'Warszawa',
      radius: '50',
      product: this.products[1],
    },
    {
      id: 6,
      name: 'Nunc cursus ornare auctor',
      fund: '400',
      tags: ['tag1', 'tag2', 'tag3', 'tag1', 'tag2', 'tag3'],
      description: 'Description 6',
      status: false,
      town: 'Kraków',
      radius: '30',
      product: this.products[2],
    },
  ];

  towns = [
    'Warszawa',
    'Lublin',
    'Krakow',
    'Wrocław',
    'Chorzów',
    'Katowice',
    'Rzeszów',
    'Łódź',
    'Białystok',
    'Gdańsk',
    'Katowice',
  ];
  constructor() {}

  ngOnInit(): void {}

  getSearchValues() {}
}
