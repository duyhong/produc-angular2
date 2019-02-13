import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {IssueService, Issue } from './issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  private issue = new Issue();
  private categories: string[] = ["Issue related to price", "Issue related to product", 
                                  "Issue related to delivery", "Issue related to return"];
  private selectedCategory: string = "Category of Help & Support";
  
  ChangeCategory(newCategory: string) { 
    this.selectedCategory = newCategory;
    this.issue.category = newCategory;
  }

  submit() {
    console.log("this.issue.description = " + this.issue.description);
    console.log("this.issue.category = " + this.issue.category);
    this.issue.status = "Open";
    this.issueServive.saveIssue(this.issue);
    this.activeModal.close('Close click');
  }
  constructor(public activeModal: NgbActiveModal, private issueServive: IssueService) { }

  ngOnInit() {
  }

}

// @Component({
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, World!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class NgbdModal2Content {
//   constructor(public activeModal: NgbActiveModal) {}
// }