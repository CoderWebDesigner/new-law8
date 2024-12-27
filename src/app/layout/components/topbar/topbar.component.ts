import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AppUserComponent } from './app-user/app-user.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { MenuService } from '../../services/menu.service';
import { SharedLanguageComponent } from 'src/app/@shared/components/shared-language/shared-language.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports:[AppUserComponent,
     NavbarMobileComponent,
      SharedLanguageComponent,
       CommonModule,
      SharedModule
      ],

})
export class TopbarComponent implements OnInit {

  constructor() { }
  _menuService = inject(MenuService);
  ngOnInit() {
  }
  public toggleMobileMenu(): void {
    this._menuService.showMobileMenu = true;
  }

  onToggleSidebar() {
    this._menuService.toggleSidebar();
  }
}
