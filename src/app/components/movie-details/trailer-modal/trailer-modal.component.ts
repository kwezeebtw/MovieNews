import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.css']
})
export class TrailerModalComponent {
  @Input() safeURL: any;
  closeResult: string = ''
 
  constructor( private modalService: NgbModal) {}

  open(content: any) {
		this.modalService.open(content, { windowClass: 'modal-holder', size: 'lg', centered:true}).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
