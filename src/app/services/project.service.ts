import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://127.0.0.1:8000/api/project/'; 

  constructor(private http: HttpClient) {}

  // Récupérer tous les projets
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  filterProjects(category :string | null , search : string | null): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}?category=${category}&search=${search}`);
  }

  // Récupérer un projet par ID
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}${id}`);
  }

  // Créer un nouveau projet
  createProject(project: Partial<Project>): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  // Mettre à jour un projet existant
  updateProject(id: number, project: Partial<Project>): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}${id}/`, project);
  }

  // Supprimer un projet
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

  Suggestions(q:string): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl+'suggestions?q='+q);
  }

  
  
}
