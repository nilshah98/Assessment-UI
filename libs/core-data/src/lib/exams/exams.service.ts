import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';


@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private httpClient: HttpClient) { }

  getExam(quizId): Observable<Object> {
    return this.httpClient.get<Object>(`/api/exam/${quizId}`);
  }

  evalExam(quizId, exam): Observable<Result> {
    return this.httpClient.post<Result>(`/api/exam/${quizId}`, exam);
  }

}
