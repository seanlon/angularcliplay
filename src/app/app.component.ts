import { Component } from '@angular/core';
import { QuestionService } from './question.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] ,
  providers:  [QuestionService]
})
export class AppComponent { 
  title = 'Tour of Heroes';
  questions: any[];
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}

 