import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private httpClient: HttpClient) { }

  getExam(quizId): Observable<Object> {
    return this.httpClient.get<Object>(`/api/exam/${quizId}`);
  }

}
