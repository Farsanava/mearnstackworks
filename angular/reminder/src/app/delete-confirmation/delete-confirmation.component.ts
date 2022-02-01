import { Component, OnInit,EventEmitter, Input,  Output } from '@angular/core';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

   @Input() item:String | null | undefined

  // @Output is used to share data from parent to child
  @Output() onDelete=new EventEmitter

  @Output() onCancel=new EventEmitter

  constructor() { }
 
  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
    // alert("deleting.....")
  }
   cancel(){
    this.onCancel.emit()
  }
}
