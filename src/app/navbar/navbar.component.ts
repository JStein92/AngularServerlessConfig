import { Component, OnInit, HostListener, Inject, Input} from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { companyName } from '../common/STRINGRESOURCE';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() nextMeetingPos;
  @Input() helpedPos;
  @Input() page: string;

  companyName = companyName;
  public fixed = false;
  public invisible = false;

  public nextMeetingVisible = false;
  public helpedVisible = false;
  public aboutVisible = false;

  constructor(@Inject(DOCUMENT) private doc: Document) {
    PageScrollConfig.defaultDuration = 500;
    PageScrollConfig.defaultEasingLogic = {
       ease: (t: number, b: number, c: number, d: number): number => {
           // easeInOutExpo easing
           if (t === 0) { return b; }
           if (t === d) { return b + c; }
           if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
           return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
       }
   };
  }

 @HostListener('window:scroll', [])
 onWindowScroll() {
   if ( this.helpedPos || this.nextMeetingPos) {
     const scrollPos = this.doc.body.parentElement.scrollTop;
     if (scrollPos < 75) {
       this.invisible = false;
     }
     if ( scrollPos <= 200 && scrollPos >= 75) {
       this.invisible = true;
     } else if ( scrollPos > 200 ) {
         this.fixed = true;
         this.invisible = false;
     } else if ( this.fixed && scrollPos < 75 ) {
         this.fixed = false;
         this.invisible = false;
     }

     this.helpedVisible = false;
     this.nextMeetingVisible = false;
     this.aboutVisible = false;

     if ( scrollPos + 200 < this.nextMeetingPos ) {
       this.aboutVisible = true;
     } else if ( scrollPos + 200 < this.helpedPos && scrollPos > 0 ) {
       this.nextMeetingVisible = true;
     } else {
       this.helpedVisible = true;
     }
   }

 }

  ngOnInit() {
    if (this.helpedPos) {
      this.aboutVisible = true;
    }
  }

}
