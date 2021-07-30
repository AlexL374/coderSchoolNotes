import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [DatePipe]
})
export class MainPageComponent implements OnInit {

myDate: Date = new Date(Date.now());
format;
  constructor(private router: Router, private datePipe: DatePipe) {
    this.format = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("language")).value = "Scratch";
    (<HTMLButtonElement>document.getElementById("regular")).click();
    this.changePlatform("Website");
    console.log(this.format);
  }

  changeWebsite(name: string) {
    (<HTMLElement>document.getElementById("website-button")).innerHTML = name;
    if (name == "Scratch") {
      (<HTMLInputElement>document.getElementById("language")).value = name;
    }
    else if (name == "Trinket" || name == "Repl.it") {
      (<HTMLInputElement>document.getElementById("language")).value = "Python";
    }
  }

  submitButtonClickRegular() {
    //first check that all required inputs are there
    var platform = (<HTMLElement>document.getElementById("platform-button")).innerHTML;
    var websiteLink;
    if (platform == "Website") {
      var website = (<HTMLElement>document.getElementById("website-button")).innerHTML;
      if (website == "Scratch") {
        websiteLink = "www.scratch.mit.edu";
      }
      else if (website == "Trinket") {
        websiteLink = "www.trinket.io";
      }
      else if (website == "Repl.it") {
        websiteLink = "www.repl.it";
      }
    }
    else if (platform == "Local Software") {
      websiteLink = (<HTMLInputElement>document.getElementById("local")).value;
    }
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var lang = (<HTMLInputElement>document.getElementById("language")).value;
    var notes = (<HTMLInputElement>document.getElementById("notes")).value;
    var topicsList = (<HTMLElement>document.getElementById("topicsList")).getElementsByTagName('li');
    var numOfTopics = topicsList.length;
    var challenges = (<HTMLInputElement>document.getElementById("challenges")).value;
    var next = (<HTMLInputElement>document.getElementById("next")).value;
    var finalText = "Date: " + this.format + "\n\nPlatform: " + platform + "\nPlatform name: " + websiteLink + "\nUsername: " + username + "\nPassword: " + password + "\nLanguage: " + lang + "\n\nNotes: " + notes + "\n\nTopics Covered:";
    for (let x = 0; x < numOfTopics; ++x) {
      finalText += "\n\t\t•" + topicsList[x].innerHTML;
    }
    finalText += "\n\nWeekly Code Challenges: " + challenges + "\n\nNext Lesson: " + next;
    (<HTMLTextAreaElement>document.getElementById("finish")).value = finalText;
  }

  submitButtonClickTrial() {
    var platform = (<HTMLElement>document.getElementById("platform-button")).innerHTML;
    var websiteLink;
    if (platform == "Website") {
      var website = (<HTMLElement>document.getElementById("website-button")).innerHTML;
      if (website == "Scratch") {
        websiteLink = "www.scratch.mit.edu";
      }
      else if (website == "Trinket") {
        websiteLink = "www.trinket.io";
      }
      else if (website == "Repl.it") {
        websiteLink = "www.repl.it";
      }
    }
    else if (platform == "Local Software") {
      websiteLink = (<HTMLInputElement>document.getElementById("local")).value;
    }
    var lang = (<HTMLInputElement>document.getElementById("language")).value;
    var notes = (<HTMLInputElement>document.getElementById("notes")).value;
    var topicsList = (<HTMLElement>document.getElementById("topicsList")).getElementsByTagName('li');
    var numOfTopics = topicsList.length;
    var finalText = "Date: " + this.format + "\n\nPlatform: " + platform + "\nPlatform name: " + websiteLink + "\nLanguage: " + lang + "\n\nNotes: " + notes + "\n\nTopics Covered:";
    for (let x = 0; x < numOfTopics; ++x) {
      finalText += "\n\t\t•" + topicsList[x].innerHTML;
    }
    (<HTMLTextAreaElement>document.getElementById("finish")).value = finalText;
  }

  tabChange(s: string) {
    var elements = document.getElementsByClassName("all");
    for (var x = 0; x < elements.length; ++x) {
      elements[x].classList.remove("active");
      if (elements[x].classList.contains(s)) {
        elements[x].classList.add("active");
      }
    }

    (<HTMLDivElement>document.getElementById("regular")).style.color = "black";
    (<HTMLDivElement>document.getElementById("trial")).style.color = "black";
    (<HTMLDivElement>document.getElementById(s)).style.color = "#4cfc55";
    //(<HTMLDivElement>document.getElemenstByClassName(s)).classList.add("active");
    if (s == "regular") {
      (<HTMLElement>document.getElementById("form")).style.gridArea = "regular";
      (<HTMLElement>document.getElementById("finishDiv")).style.gridArea = "trial";
      //show username, password, homework, and next lesson goals
      (<HTMLDivElement>document.getElementById("username_group")).style.height = "auto";
      (<HTMLDivElement>document.getElementById("password_group")).style.height = "auto";
      (<HTMLDivElement>document.getElementById("challenges_group")).style.height = "auto";
      (<HTMLDivElement>document.getElementById("next_group")).style.height = "auto";
      //set finishdiv to be on right side
      (<HTMLDivElement>document.getElementById("finishDiv")).style.left = "50%";
    }
    else if (s == "trial") {
      (<HTMLElement>document.getElementById("form")).style.gridArea = "trial";
      (<HTMLElement>document.getElementById("finishDiv")).style.gridArea = "regular";
      (<HTMLDivElement>document.getElementById("username_group")).style.height = "0px";
      (<HTMLDivElement>document.getElementById("password_group")).style.height = "0px";
      (<HTMLDivElement>document.getElementById("challenges_group")).style.height = "0px";
      (<HTMLDivElement>document.getElementById("next_group")).style.height = "0px";
      //set finishdiv to be on left side
      (<HTMLDivElement>document.getElementById("finishDiv")).style.left = "0%";
    }
    //reset all elements
    (<HTMLElement>document.getElementById("finish")).innerHTML = "";
    (<HTMLSelectElement>document.getElementById("platform-button")).innerHTML = "Website";
    (<HTMLSelectElement>document.getElementById("website-button")).innerHTML = "Scratch";
    (<HTMLInputElement>document.getElementById("username")).value = "";
    (<HTMLInputElement>document.getElementById("password")).value = "";
    (<HTMLInputElement>document.getElementById("language")).value = "";
    (<HTMLInputElement>document.getElementById("notes")).value = "";
    (<HTMLInputElement>document.getElementById("topics")).value = "";
    var children = document.getElementsByClassName("node");
    var len = children.length;
    for (var x = 0; x < len; ++x) {
      (<HTMLButtonElement>children[0]).click();
    }
    (<HTMLInputElement>document.getElementById("challenges")).value = "";
    (<HTMLInputElement>document.getElementById("next")).value = "";
    this.changeWebsite("Scratch");

  }

  onEnter(e: KeyboardEvent) {
    if (e.key == 'Enter') {
      //on enter press, then add a topic
      var topicName = (<HTMLInputElement>document.getElementById("topics")).value;
      var t = document.createElement("li");
      t.innerHTML = topicName;
      t.style.display = "inline";
      t.style.border = "2px solid black";
      t.style.padding = "8px";
      t.style.margin = "0px 8px 20px 8px";
      t.style.borderRadius = "10px";
      t.classList.add("node");
      t.onclick = function (event) {
        (<HTMLElement>document.getElementById("topicsList")).removeChild(t);
      };
      (<HTMLElement>document.getElementById("topicsList")).appendChild(t);
      (<HTMLInputElement>document.getElementById("topics")).value = "";
    }
  }

  changePlatform(platformName: string) {
    var web = (<HTMLDivElement>document.getElementById("website-container"));
    var local = (<HTMLElement>document.getElementById("local_group"));
    if (platformName == "Website") {
      web.style.opacity = "1";
      web.style.visibility = "visible";
      web.style.height = "auto";
      local.style.opacity = "0";
      local.style.visibility = "hidden";
      local.style.height = "0px";
    }
    else if (platformName == "Local Software") {
      web.style.opacity = "0";
      web.style.visibility = "hidden";
      web.style.height = "0px";
      local.style.opacity = "1";
      local.style.visibility = "visible";
      local.style.height = "auto";
    }
    (<HTMLElement>document.getElementById("platform-button")).innerHTML = platformName;
  }

  @HostListener('window:scroll', ['$event'])
  moveWithScroll(e: Event) {
    var d = (<HTMLDivElement>document.getElementById("finishDiv"));
    console.log();
  }

}
