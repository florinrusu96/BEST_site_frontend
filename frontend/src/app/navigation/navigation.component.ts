import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ro');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('ro');
   }

  ngOnInit() {
  }

  changeLanguage(){
    if(this.translate.currentLang == "gb"){
      this.translate.use("ro")
    }
    else{
      this.translate.use("gb")
    }
  }

}
