import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData = (): Observable<Response> => {
    return this.http.get('../assets/mock.json')
      .map((res: Response) => res.json());
  }
}


