import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher} from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ExitComponent } from 'src/app/common-module/exit/exit.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  mobileQuery: MediaQueryList;
  userinfo: any = { user_name: 'Manasa', email: 'manasa@blazeautomation.com' };
  activeRoute: any;
  image:any='../../../assets/svg/no profile.png';
  private _mobileQueryListener: () => void;
  constructor(private router: Router,  changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(min-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);  }
  ngOnInit(): void {
    this.activeRoute = this.router.url.split('/')[2];
  }
  ngOnChanges(changes: any): void {
  }
  routeTo(path:any) {
    this.activeRoute=path;
    if (path == 'overview') {
      this.router.navigate(['dashboard/overview'])
    }
    else if (path == 'certificates') {
      this.router.navigate(['dashboard/certificates'])
    }
    else if (path == 'ota') {
      this.router.navigate(['dashboard/ota'])
    }
  }
  exitDashboard() {
    let dialogRef = this.dialog.open(ExitComponent, {
      width: '500px',
      data: {
        type: 1,
      }
    });
  }
  getUrl() { }
}
