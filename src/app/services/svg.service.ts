import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SvgService {
  svgIcon: any = [
   'login-header','cursor','Mouse_pointer','Bone-logo','logout','settings'
  ];
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private http: HttpClient) { }
  getIcons() {
    this.svgIcon.forEach((ele: any) => {
      this.iconRegistry.addSvgIcon(ele, this.sanitizer.bypassSecurityTrustResourceUrl(`../../assets/svg/${ele}.svg`));
    });
  }
}

