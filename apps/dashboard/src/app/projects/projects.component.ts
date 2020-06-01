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
    this.resetProject();
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

  resetProject(){
    const emptyProject : Project = {
      id: null,
      title: "",
      description: ""
    };
    this.selectProject(emptyProject);
  }

  cancel(){
    this.resetProject();
  }

  saveProject(project){
    project.id ? this.updateProject(project) : this.createProject(project);
  }

  createProject(project){
    this.projectService.create(project)
      .subscribe(_res => {
        this.getProjects();
        this.resetProject();
      })
  }

  updateProject(project){
    this.projectService.update(project)
      .subscribe(_res => {
        this.getProjects();
        this.resetProject();
      })
  }

}
