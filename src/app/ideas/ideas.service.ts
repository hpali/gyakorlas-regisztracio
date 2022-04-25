import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Idea} from './models/idea.model';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  private _baseUrl = `${environment.baseUrl}/ideas`

  constructor(private http: HttpClient) { }

  listIdeas(){
    return this.http.get<Idea[]>(`${this._baseUrl}`);
  }

  upvoteIdea(idea: Idea){
    return this.http.patch<{id: string}>(`${this._baseUrl}/${idea.id}/upvote`, null);
  }

  downvoteIdea(idea: Idea){
    return this.http.patch<{id: string}>(`${this._baseUrl}/${idea.id}/downvote`, null);
  }

  deleteIdea(idea: Idea){
    return this.http.delete<{id: string}>(`${this._baseUrl}/${idea.id}`);
  }
}
