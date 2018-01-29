import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class GetAccessTokenService{

    /*URLs for the api calls*/
    private accessTokenUrl = 'https://simulationapi.ur-nl.com/oauth/token.json'; 
    private questionsUrl = 'https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions';

    constructor( private _httpRequest: Http){}


    /*HTTP POST Call to fetch oauth access token*/
    getAccessTokenMethod() {       
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        /*POST parameters*/
        var body = JSON.stringify({'grant_type': 'password', 'scope': 'user', 'client_id': '4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5', 'client_secret': '908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88', 'auth_token': 'azd4jXWWLagyb9KzgfDJ'});

        return this._httpRequest
                .post(this.accessTokenUrl, body , options)
                .map((res: Response) => res.json()) 
                .catch (error => <any>error);                
    }

    /*HTTP GET Call to fetch questions*/
    getQuestionsMethod(accessToken): Observable<any> {
    	let headers = new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this._httpRequest
                .get(this.questionsUrl, options)
                .map((res: Response) => res.json().user_company_case_study.company_case_study.questions) 
                .catch (error => <any>error);
    } 
}