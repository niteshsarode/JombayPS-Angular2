import { Component, Inject } from '@angular/core';
import { GetAccessTokenService } from './app.service'
import {MatDialog, MatDialogRef} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GetAccessTokenService ]
})
export class AppComponent {

	/* Declaring variables*/
	title = 'Jombay Case Study App';
	private welcomeMsg: string;
	private accessToken: string;
	private errormessage: string;
	private questions: Array<JSON>;
	private question: string;
	private index: number;

	constructor(private _getService: GetAccessTokenService, public dialog: MatDialog) {}

	ngOnInit() {
		/*Method call to send access token request*/
		this._getService.getAccessTokenMethod().
						subscribe(
							data => this.accessToken = data.access_token,
							error => this.errormessage = <any>error,
						);
		this.welcomeMsg = 'Welcome to Jombay Case Study!';
	}

	/*Method call to send questions request*/
	fetchQuestions() {
		this._getService.getQuestionsMethod(this.accessToken).
						subscribe(
							data => this.questions = data,
							error => this.errormessage = <any>error
						);
	}

	/*access particular question from questions JSON array*/
	getQuestion(index) {
		console.log(this.questions[index]['body']);
		this.question = this.questions[index]['body'];
		this.index = index;
	}

	/*Function for next button*/
	nextFunction() {
		this.question = this.questions[this.index+1]['body'];
		this.index = this.index+1;
	}

	/*Function for previous button*/
	previousFunction() {
		this.question = this.questions[this.index-1]['body'];
		this.index = this.index-1;
	}

	/*Function for submit button*/
	submitFunction(): void {
		let dialogRef = this.dialog.open(DialogComponent); /* Opens Dialog box*/
	}
}


