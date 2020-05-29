import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workspace/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<Project[]>;
  selectedProject: Project;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.projectService.all()
  }

  deleteProject(project){
    this.projectService.delete(project)
      .subscribe(_res => this.getProjects());
  }

  selectProject(project){
    this.selectedProject = project;
  }

  cancel(){
    this.selectProject(null);
  }

}
