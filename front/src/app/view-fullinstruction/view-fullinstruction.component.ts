import { Component, OnInit  } from '@angular/core';
import { InstructionService } from '../instruction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-fullinstruction',
  templateUrl: './view-fullinstruction.component.html',
  styleUrls: ['./view-fullinstruction.component.css']
})
export class ViewFullinstructionComponent implements OnInit  {
  instructionTitle: string;
  instructionImg: string;
  instructionContent: string;
  instructionSteps = [];
  commentData = [];
  comment: string;
  isLoggedIn: boolean = false;

  constructor(private instruction: InstructionService) { }
  ngOnInit() {
    console.log(this.instruction.getInstructionName());
    this.instruction.getOneInstruction(this.instruction.getInstructionName())
      .subscribe(
        res => {
          this.instructionTitle = res[0].InstructionTitle;
          this.instructionImg = res[0].InstructionImg;
          this.instructionContent = res[0].InstructionContent;
        },
        err => console.log(err)
    );
    this.instruction.getAllSteps(this.instruction.getInstructionName()).subscribe(
      res => {
        this.instructionSteps = res;
      },
      err => console.log(err)
   );
    this.instruction.getComments(this.instruction.getInstructionName()).subscribe(
     res => this.commentData = res,
     err => console.log(err)
   );
    if (localStorage.getItem('username') === null) {
      this.isLoggedIn = false;
   } else {
      this.isLoggedIn = true;
   }
  }

  setComment() {
    this.instruction.setComments(this.comment, this.instruction.getInstructionName(), localStorage.getItem('username')).subscribe(
      res => {
        console.log(res);
        this.comment = '';
      },
      err => console.log(err)
    );
  }
}
