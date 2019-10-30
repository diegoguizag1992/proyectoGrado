import { Component, OnInit } from '@angular/core';
// import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private http: HttpClient,
              private headers: HttpHeaders,
              private params: HttpParams) { }

  ngOnInit() {
  }

  sendEmail() {

    let url = `https://your-cloud-function-url/function`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'diego.guizag@gmail.com');
    params.set('from', 'diego.guizag@gmail.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this.http.post(url, params)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })
  }

}
