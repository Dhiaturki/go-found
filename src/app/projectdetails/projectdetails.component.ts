import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from '../services/user.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  newCommentText !: string;
  project!:Project
  constructor(private projectService : ProjectService , private route : ActivatedRoute , public imageService  : ImageService){}


  addComment(){

  }
   ngOnInit(): void {
      this.projectService.getProjectById(this.route.snapshot.params['id']).subscribe(
        res=>this.project=res
      ) 
   }
}
