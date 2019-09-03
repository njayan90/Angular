import { Component, OnInit } from '@angular/core';
import { GetNewsService } from '../get-news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailedNews:any;
  constructor(private newsService:GetNewsService) { }

  ngOnInit() {
   this.newsService.detailedNewsEmitter.subscribe(news=>this.detailedNews=news);
   console.log(this.detailedNews);
      
  }

}
