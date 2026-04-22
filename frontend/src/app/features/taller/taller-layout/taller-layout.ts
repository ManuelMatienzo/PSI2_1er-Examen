import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-taller-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './taller-layout.html'
})
export class TallerLayout {
  private router = inject(Router);

  // Control responsivo del menú
  isMobileMenuOpen = signal(false);

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  cerrarMenu() {
    this.isMobileMenuOpen.set(false);
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}