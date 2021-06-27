import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("language")).value = "Scratch";
  }

  changeWebsite() {
    var website = (<HTMLSelectElement>document.getElementById("website")).selectedOptions[0].innerHTML;
    if (website == "Scratch") {
      (<HTMLInputElement>document.getElementById("language")).value = "Scratch";
    }
    else if (website == "Trinket") {
      (<HTMLInputElement>document.getElementById("language")).value = "Python";
    }
    else if (website == "Repl.it") {
      (<HTMLInputElement>document.getElementById("language")).value = "Python";
    }
  }

  submitButtonClick() {
    var platform = (<HTMLSelectElement>document.getElementById("platform")).selectedOptions[0].innerHTML;
    var website = (<HTMLSelectElement>document.getElementById("website")).selectedOptions[0].innerHTML;
    var websiteLink;
    if (website == "Scratch") {
      websiteLink = "www.scratch.mit.edu";
    }
    else if (website == "Trinket") {
      websiteLink = "www.trinket.io";
    }
    else if (website == "Repl.it") {
      websiteLink = "www.repl.it";
    }
    var lang = (<HTMLInputElement>document.getElementById("language")).value;
    var notes = (<HTMLInputElement>document.getElementById("notes")).value;
    var challenges = (<HTMLInputElement>document.getElementById("challenges")).value;
    var next = (<HTMLInputElement>document.getElementById("next")).value;
    var finalText = "Platform: " + platform + "<br>" + "Platform name: " + websiteLink + "<br>" + "Language: " + lang + "<br><br>Notes: " + notes + "<br><br>Weekly Code Challenges: " + challenges + "<br><br>Next Lesson: " + next;
    (<HTMLParagraphElement>document.getElementById("finish")).innerHTML = finalText;
  }

}
