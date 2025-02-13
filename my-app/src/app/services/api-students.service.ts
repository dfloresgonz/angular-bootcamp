import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Student = {
  id: number;
  name: string;
  lastname: string;
  age: number;
};

@Injectable({
  providedIn: 'root',
})
export class ApiStudentsService {
  private readonly apiUrl = 'https://67ad621d3f5a4e1477dd819c.mockapi.io';
  constructor(private readonly http: HttpClient) {}

  getAllStudents() {
    return firstValueFrom(
      this.http.get<Student[]>(`${this.apiUrl}/api/dmc/students/student`)
    );
  }
}
