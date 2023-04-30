import { Component, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http"



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit{
  response: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void{
    console.log("TestComponent")
    this.http.get<any>("http://localhost:8080/test").subscribe(
      {

        next: ((response: any) => {
          console.log(response);
          this.response = response;
        }),
        error: (error => {
          console.log(error);
        })
      }
    );
  }

}
