import { Component, signal } from '@angular/core';

export interface SolicitudEmergencia {
  id: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  tipo: string;
  ubicacion: string;
  distancia: string;
  vehiculo: string;
  resumenIA: string;
  tiempo: string;
}

@Component({
  selector: 'app-taller-dashboard',
  standalone: true,
  templateUrl: './taller-dashboard.html'
})
export class TallerDashboard {
  // Simulamos las alertas que entran en tiempo real (CU-07)
  solicitudes = signal<SolicitudEmergencia[]>([
    {
      id: 'REQ-8892',
      prioridad: 'Alta',
      tipo: 'Colisión Frontal',
      ubicacion: 'Av. Banzer, 4to Anillo',
      distancia: '2.5 km',
      vehiculo: 'Toyota Hilux 2021',
      resumenIA: 'Daño severo en radiador y tren delantero detectado por imagen. Requiere grúa con urgencia.',
      tiempo: 'hace 2 min'
    },
    {
      id: 'REQ-8893',
      prioridad: 'Media',
      tipo: 'Falla de Motor',
      ubicacion: 'Av. Cristo Redentor',
      distancia: '4.1 km',
      vehiculo: 'Nissan Sentra 2018',
      resumenIA: 'Humo en el capó reportado en audio. Posible sobrecalentamiento térmico.',
      tiempo: 'hace 5 min'
    },
    {
      id: 'REQ-8894',
      prioridad: 'Baja',
      tipo: 'Pinchazo',
      ubicacion: 'Barrio Equipetrol',
      distancia: '1.2 km',
      vehiculo: 'Suzuki Swift 2022',
      resumenIA: 'Llanta delantera derecha desinflada. Herramienta estándar requerida in situ.',
      tiempo: 'hace 12 min'
    }
  ]);

  aceptarSolicitud(id: string) {
    // En un sistema real, aquí llamaríamos al backend para asignar el taller.
    // Por ahora, simplemente la removemos de la lista de "pendientes".
    this.solicitudes.update(list => list.filter(s => s.id !== id));
  }

  rechazarSolicitud(id: string) {
    this.solicitudes.update(list => list.filter(s => s.id !== id));
  }
}