import { Component, OnInit } from '@angular/core';
import { InstructionService } from '../instruction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-instruction',
  templateUrl: './create-instruction.component.html',
  styleUrls: ['./create-instruction.component.css']
})
export class CreateInstructionComponent implements OnInit {
  instructionData: {
    InstructionName: string;
    UserName: string;
    InstructionImg: string;
    InstructionTitle: string;
    InstructionContent: string;
    InstructionTegs: string;
  };
  imgName: string;
  countSteps: number;
  instructionTitle: string;
  instructionContent: string;
  constructor(private instructionService: InstructionService , private router: Router) { }

  ngOnInit() {
  }
  createInstruction() {
    this.instructionData = {
      InstructionName: this.instructionTitle,
      UserName: localStorage.getItem('username'),
      InstructionImg: this.imgName,
      InstructionTitle: this.instructionTitle,
      InstructionContent: this.instructionContent,
      InstructionTegs: 'asdfasdf,asdfasdf'
    };

    this.instructionService.createInstruction(this.instructionData).subscribe(
      res => {
        this.instructionService.setInstructionName(res.InstructionName);
        this.instructionService.setCountSteps(this.countSteps);
        this.router.navigate(['/instructionsteps']);
      },
      err => console.log(err)
    );

  }
  onFilesChange(fileList: FileList) {
    this.imgName = fileList.item(0).name;
  }
}
