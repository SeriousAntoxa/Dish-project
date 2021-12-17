import { Component, OnInit } from '@angular/core';

interface ICompany {
  id: string,
  name: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  public company: Array<ICompany> = [
    {
      id: '1',
      name: 'epam'
    },
    {
      id: '2',
      name: 'wargaming'
    }
  ]

  public today: Date = new Date()

  public courseUSD: number = 2.55

  public percentCOVID: number = 654718 / 9349645

  public numberCOVID: number = 654718

  public collectionFruit: string[] = ['orange', 'pineapple', 'persimmon', 'mango']

  constructor() { }

  ngOnInit(): void {
  }

}
