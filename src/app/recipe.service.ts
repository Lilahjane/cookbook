import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeI } from './recipe-i';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient);

  public getAllRecipes(): Observable<RecipeI[]> {
    return this.http.get<RecipeI[]>('assets/source.json');
  }
}