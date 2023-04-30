import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-find-age',
  templateUrl: './find-age.component.html',
  styleUrls: ['./find-age.component.css']
})
export class FindAgeComponent {
  response: any;
  age: any;
  text: string = "";
  constructor(private http: HttpClient) {
  }


  findAge(name: string): void{
    console.log("TestComponentAge")
    this.http.get<any>("http://localhost:8080/test/findAge?name=" + name).subscribe(
      {

        next: ((response: any) => {
          console.log(response);
          this.age = response;
        }),
        error: (error => {
          console.log(error);
        })
      }
    );
  }
}
