import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endPoint = "assets/data.json"


  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  options = { headers: this.httpHeaders }
  constructor(private httpClient: HttpClient) { }

  public getAction(step) {
    let tabs = []
    return new Promise(resolve => {

      this.httpClient.get(this.endPoint, this.options).subscribe(
        (data: any) => {

          tabs = data.transactions.filter(element =>
            element.id <= (step * 5) && element.id > (step - 1) * 5
          );
          resolve(tabs);
        },
        err => {
        }
      )
    })

  }
}

