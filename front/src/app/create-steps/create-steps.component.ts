import { Component, OnInit, Input } from '@angular/core';
import { InstructionService } from '../instruction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-steps',
  templateUrl: './create-steps.component.html',
  styleUrls: ['./create-steps.component.css']
})
export class CreateStepsComponent implements OnInit {
  countSteps: number;
  createBtn: number = 0;
  Arr = Array;
  stepsData: {
    idInstruction: string;
    StepName: string;
    StepTitle: string;
    StepImg: string;
    StepContent: string;
  };
  imgStep: string = '';
  titleStep: string;
  contentStep: string;
  constructor(private instructionService: InstructionService,  private router: Router) { }
  ngOnInit() {
    this.countSteps = this.instructionService.getCountSteps();
  }
  incButtonCkick(j) {
    this.createBtn = (j + 1);
    if (this.createBtn === this.countSteps) {
      this.router.navigate(['/']);
      return;
    }
    this.stepsData = {
      idInstruction: this.instructionService.getInstructionName(),
      StepName: this.titleStep,
      StepTitle: this.titleStep,
      StepImg: this.imgStep,
      StepContent: this.contentStep
    };
    this.instructionService.createSteps(this.stepsData).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    console.log(this.createBtn);
    this.imgStep = '';
    this.titleStep = '';
    this.contentStep = '';
  }
  onFilesChange(fileList: FileList) {
    this.imgStep = fileList.item(0).name;
    console.log(fileList);
  }
}
