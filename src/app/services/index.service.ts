import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private apiUrl = 'http://localhost:8085/tutorial-1.0.0/hello'; // Proxy will forward to Spring Boot

  constructor(private http: HttpClient) {}

    getHello(): Observable<string> {
        console.log("inside gethello");
    return this.http.get('http://localhost:8085/tutorial-1.0.0/hello', { responseType: 'text' });
  }
}