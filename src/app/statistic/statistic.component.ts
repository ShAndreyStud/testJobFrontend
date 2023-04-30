import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit{
  text: any;
  name: any;
  counter: any;
  maxAgeInt: any;
  maxAgeName: any;
  constructor(private http: HttpClient, private http1: HttpClient) {
  }

  ngOnInit(): void{
    console.log("TestComponent")
    this.http.get<any>("http://localhost:8080/test").subscribe(
      {

        next: ((response: any) => {
          console.log(response);
          this.text = response;
        }),
        error: (error => {
          console.log(error);
        })
      }
    );
  }

  lookStatistic(name: string): void{
    this.http.get<any>("http://localhost:8080/actuator/metrics/counter.name." + name).subscribe(
      {

        next: ((response: any) => {
          console.log(response);
          this.counter = response.measurements[0].value;
          console.log(this.counter);
        }),
        error: (error => {
          this.counter = 0;
        })
      }
    );
  }

  maxAge(): void{
    this.http1.get<any>("http://localhost:8080/test/maxAge").subscribe(
      {

        next: ((response: any) => {
          this.maxAgeInt = response;
          this.maxAgeName = this.text[this.maxAgeInt]
        }),
        error: (error => {
          console.log(error);
        })
      }
    );
  }
}
