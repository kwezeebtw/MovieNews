import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
 
  @Input() initData:any;
  @Output() comValueChange = new EventEmitter<string>();
  @Output() repValueChange = new EventEmitter<string>();
  @Output() repToRepValueChange = new EventEmitter<string>();
  @Output() inRepValueChange = new EventEmitter<string>();
  @Output() inputFocused = new EventEmitter<boolean>();
  whatOut: any;
  content:string = ' ';
  @Input() isFor:string = 'com';
  isFocus:boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(this.initData){
      this.content = this.initData;
    }

    this.whatOut = this.comValueChange;
  }

  focused(){
    this.isFocus = true;
    this.inputFocused.emit(true);
    this.cd.detectChanges();
  }


  public onTextareaChange(newContent: string): void {

    this.whatOut.emit(newContent);
    this.cd.detectChanges();
  }
}
