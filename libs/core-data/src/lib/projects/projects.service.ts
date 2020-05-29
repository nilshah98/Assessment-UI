import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project: Project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(project: Project) {
    return this.httpClient.delete(this.getUrlForId(project.id));
  }
}
