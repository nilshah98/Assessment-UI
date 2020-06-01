import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService, Project, User, UserService } from '@workspace/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  currUser: User;
  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectsService, private userService: UserService) { }

  ngOnInit(): void {
    this.currUser = this.userService.currUser;
    this.getProjects();
    this.resetProject();
  }

  getProjects() {
    this.projectService.all()
      .subscribe(res => {
        this.projects = res;
      })
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
      description: "",
      user: null,
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
