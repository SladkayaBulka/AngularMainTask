import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private url = 'http://localhost:5000';
  instruction: {
    InstructionTitle: string,
    InstructionImg: string,
    InstructionName: string
  };
  private countSteps: number;
  private instructionName: string;
  constructor(private http: HttpClient) { }


  getUserInstruction(username): Observable<instructions[]> {
    return this.http.get<instructions[]>(`${this.url}/instruction/${username}`);
  }

  getAllSteps(stepsId) {
    return this.http.get<any>(`${this.url}/steps/${stepsId}`);
  }

  getOneInstruction(instructionTitle) {
    console.log('hui ' + instructionTitle);
    return this.http.get<any>(`${this.url}/instructions/${instructionTitle}`);
  }

  getAllInstruction() {
    return this.http.get<any>(`${this.url}/instruction`);
  }

  createInstruction(instruction) {
    return this.http.post<any>(`${this.url}/instruction`, instruction);
  }

  createSteps(steps) {
    return this.http.post<any>(`${this.url}/steps`, steps);
  }

  setInstructionName(instrName) {
    this.instructionName = instrName;
  }

  getInstructionName() {
    return this.instructionName;
  }

  setCountSteps(cSteps) {
    this.countSteps = cSteps;
  }
  getCountSteps() {
    return this.countSteps;
  }


}


export interface instructions {
  InstructionName: string;
  InstructionTitle: string;
  InstructionImg: string;
}
