import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsService} from './projects/projects.service'
import { UserService } from './user/user.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProjectsService,
    UserService
  ],
})
export class CoreDataModule {}
