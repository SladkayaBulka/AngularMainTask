import { Component, OnInit, OnDestroy  } from '@angular/core';
import { InstructionService } from '../instruction.service';


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

  constructor(private instruction: InstructionService) { }
  ngOnInit() {
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
  }

}
