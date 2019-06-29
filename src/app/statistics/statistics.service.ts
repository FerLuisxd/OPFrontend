import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistics} from '../class/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiUrl = 'http://localhost:8080/api/player'

  constructor(private http: HttpClient) { }
}