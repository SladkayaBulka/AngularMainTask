import { Component, OnInit } from '@angular/core';
import { InstructionService } from '../instruction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
   instructionData = [];

  constructor(private instruction: InstructionService , private router: Router) { }

  openInstruction(instructionName) {
    this.instruction.setInstructionName(instructionName);
    this.router.navigate(['viewInstruction']);
  }

  ngOnInit() {
    this.instruction.getAllInstruction()
    .subscribe(
      res => this.instructionData = res,
      err => console.log(err)
    );
  }

}
