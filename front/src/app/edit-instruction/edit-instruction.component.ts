import { Component, OnInit, ViewChild } from '@angular/core';
import { InstructionService } from '../instruction.service';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-instruction',
  templateUrl: './edit-instruction.component.html',
  styleUrls: ['./edit-instruction.component.css']
})
export class EditInstructionComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ['actions', 'edit', 'InstructionTitle', 'InstructionImg', 'InstructionName'];
  constructor(private instruction: InstructionService) { }
  ngOnInit() {
    this.instruction.getUserInstruction(localStorage.getItem('username'))
    .subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      },
      err => console.log(err)
    );
}
deleteInstruction(instructionName) {
  this.instruction.deleteInstruction(instructionName)
  .subscribe(
    res => {
      console.log(res);
      this.ngOnInit();
    },
    err => {
      console.log(err);
      return;
  }
  );
  this.instruction.delAllSteps(instructionName)
  .subscribe(
    res => console.log(res),
    err => console.log(err));
}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}
}




