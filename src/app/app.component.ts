import { Component } from '@angular/core';
import { SvgService } from './services/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OTA-Certificate-Management';
  constructor(public svgService: SvgService) { }
  ngOnInit(): void {
    this.svgService.getIcons();
  }
}
