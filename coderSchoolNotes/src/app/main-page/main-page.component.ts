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
    console.log("starting")
  }

  submitButtonClick() {
    var platform = (<HTMLSelectElement>document.getElementById("platform")).selectedOptions[0].innerHTML;
    var website = (<HTMLSelectElement>document.getElementById("website")).selectedOptions[0].innerHTML;
    var websiteLink;
    if (website == "Scratch") {
      websiteLink = "www.scratch.mit.edu";
      (<HTMLInputElement>document.getElementById("language")).value = "Scratch"; //when the options/select tag is changed, then we can edit this, similar to platforms and links
    }
    else if (website == "Trinket") {
      websiteLink = "www.trinket.io";
    }
    else if (website == "Repl.it") {
      websiteLink = "www.repl.it";
    }
    var lang = (<HTMLInputElement>document.getElementById("language")).value;
    var finalText = "Platform: " + platform + "<br>" + "Platform name: " + websiteLink + "<br>" + "Language: " + lang;
    (<HTMLParagraphElement>document.getElementById("finish")).innerHTML = finalText;
  }

}
