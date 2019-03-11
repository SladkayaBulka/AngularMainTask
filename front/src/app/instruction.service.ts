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
  private comment: Comments;
  constructor(private http: HttpClient) { }


  getComments(instructionName): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.url}/comment/${instructionName}`);
  }

  setComments(comment, instructionName, userName) {
    this.comment = {
      instructionname: instructionName,
      username: userName,
      text: comment
    };
    return this.http.post<any>(`${this.url}/comment`, this.comment);
  }

  getUserInstruction(username): Observable<Instructions[]> {
    return this.http.get<Instructions[]>(`${this.url}/instruction/${username}`);
  }

  deleteInstruction(instructionname) {
    return this.http.delete<any>(`${this.url}/instructions/${instructionname}`);
  }

  delAllSteps(instructionname) {
    return this.http.delete<any>(`${this.url}/steps/${instructionname}`);
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
    localStorage.setItem('instructionName', instrName);
  }

  getInstructionName() {
    return localStorage.getItem('instructionName');
  }

  setCountSteps(cSteps) {
    this.countSteps = cSteps;
  }
  getCountSteps() {
    return this.countSteps;
  }


}


export interface Instructions {
  InstructionName: string;
  InstructionTitle: string;
  InstructionImg: string;
}

export interface Comments {
  instructionname: string;
  username: string;
  text: string;
}
