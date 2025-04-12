import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private http = inject(HttpClient)


  getExperience(): Observable<any> {
    return this.http.get<any>('assets/data.json');
  }

  sendExperience(experienceData: any): Observable<any> {
    const url = 'http://localhost:3000/experience';
    return this.http.post<any>(url, experienceData)
  }
}

