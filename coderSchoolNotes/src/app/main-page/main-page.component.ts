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
    //first check that all required inputs are there

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
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var lang = (<HTMLInputElement>document.getElementById("language")).value;
    var notes = (<HTMLInputElement>document.getElementById("notes")).value;
    var topicsList = (<HTMLElement>document.getElementById("topicsList")).getElementsByTagName('li');
    var numOfTopics = topicsList.length;
    var challenges = (<HTMLInputElement>document.getElementById("challenges")).value;
    var next = (<HTMLInputElement>document.getElementById("next")).value;
    var finalText = "Platform: " + platform + "<br>Platform name: " + websiteLink + "<br>Username: " + username + "<br>Password: " + password + "<br>Language: " + lang + "<br><br>Notes: " + notes + "<br><br>Topics Covered:";
    for (let x = 0; x < numOfTopics; ++x) {
      finalText += "<br>&emsp;&emsp;•" + topicsList[x].innerHTML;
    }
    finalText += "<br><br>Weekly Code Challenges: " + challenges + "<br><br>Next Lesson: " + next;
    (<HTMLParagraphElement>document.getElementById("finish")).innerHTML = finalText;
  }

  tabChange(s: string) {
    var types = document.getElementsByClassName("type");
    for (var x = 0; x < types.length; ++x) {
      types[x].classList.remove("active");
    }
    (<HTMLDivElement>document.getElementById(s)).classList.add("active");
  }

  onEnter(e: KeyboardEvent) {
    if (e.key == 'Enter') {
      //on enter press, then add a topic
      var topicName = (<HTMLInputElement>document.getElementById("topics")).value;
      var t = document.createElement("li");
      t.innerHTML = topicName;
      t.style.display = "inline";
      t.style.border = "solid";
      t.style.padding = "10px";
      t.style.margin = "10px";
      t.onclick = function (event) {
        (<HTMLElement>document.getElementById("topicsList")).removeChild(t);
      };
      (<HTMLElement>document.getElementById("topicsList")).appendChild(t);
      (<HTMLInputElement>document.getElementById("topics")).value = "";
    }
  }

}
