import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { UserService } from '../services/user.service';
import { UserProfile } from '../models/user.model';
import {  Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user !:UserProfile
  search: string = '';
  suggestions: any[] = [];
  showSuggestions: boolean = false;
  private searchSubject = new Subject<string>();
  constructor(public imageService : ImageService , public userService : UserService , private route :Router , private projetService : ProjectService , private http: HttpClient){}

  logout(){
    this.userService.logout().subscribe(
      res=>{
        localStorage.removeItem('authToken')
        this.route.navigate(['/login'])
      }
    )
  }


  searchProjects() {
    this.searchSubject.next(this.search); // Emit the current search query
  }

  selectSuggestion(suggestion: any) {
    this.search = suggestion.title;
    this.showSuggestions = false;
    console.log(`Suggestion selected: ${suggestion.title}`);
    // Load results or redirect to the project's page if needed
  }

  hideSuggestionsAfterDelay() {
    setTimeout(() => this.showSuggestions = false, 100);
  }
  

  ngOnInit(): void {
      this.userService.getuserConnecter().subscribe(
        res=>this.user=res,
        error=>console.log(error.message)
      )

      this.searchSubject.pipe(
        debounceTime(200), // Wait 300ms
        distinctUntilChanged() // Only emit if the value changes
      ).subscribe(query => {
        if (query.trim().length > 0) {
          this.projetService.Suggestions(this.search).subscribe(
            res => this.suggestions = res,
            err => console.error('Error fetching suggestions', err)
          );
        } else {
          this.suggestions = [];
        }
      });
  }
}
