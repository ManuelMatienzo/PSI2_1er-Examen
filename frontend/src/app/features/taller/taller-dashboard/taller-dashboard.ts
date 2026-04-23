import { Component, signal } from '@angular/core';
import { SlicePipe } from '@angular/common';

export interface SolicitudEmergencia {
  id: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  tipo: string;
  ubicacion: string;
  distancia: string;
  vehiculo: string;
  resumenIA: string;
  tiempo: string;
  // --- NUEVOS CAMPOS ---
  evidenciaFoto: string;
  evidenciaTranscripcion: string;
}

@Component({
  selector: 'app-taller-dashboard',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './taller-dashboard.html'
})
export class TallerDashboard {
  // Estado del Modal
  isModalOpen = signal(false);
  solicitudSeleccionada = signal<SolicitudEmergencia | null>(null);

  solicitudes = signal<SolicitudEmergencia[]>([
    {
      id: 'REQ-8892',
      prioridad: 'Alta',
      tipo: 'Colisión Frontal',
      ubicacion: 'Av. Banzer, 4to Anillo',
      distancia: '2.5 km',
      vehiculo: 'Toyota Hilux 2021',
      resumenIA: 'Daño severo en radiador y tren delantero detectado por visión artificial. El motor presenta fugas de refrigerante.',
      tiempo: 'hace 2 min',
      evidenciaFoto: 'https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?q=80&w=500', // Foto de choque real
      evidenciaTranscripcion: "Ayuda, choqué contra un poste en la Banzer. El auto no arranca y sale humo blanco..."
    },
    {
      id: 'REQ-8893',
      prioridad: 'Media',
      tipo: 'Falla de Motor',
      ubicacion: 'Av. Cristo Redentor',
      distancia: '4.1 km',
      vehiculo: 'Nissan Sentra 2018',
      resumenIA: 'Sobrecalentamiento térmico detectado. Los sensores indican falla en el termostato.',
      tiempo: 'hace 5 min',
      evidenciaFoto: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=500',
      evidenciaTranscripcion: "Salió un aviso de temperatura en el tablero y empezó a sonar raro el motor..."
    }
  ]);

  abrirEvidencia(solicitud: SolicitudEmergencia) {
    this.solicitudSeleccionada.set(solicitud);
    this.isModalOpen.set(true);
  }

  cerrarModal() {
    this.isModalOpen.set(false);
    this.solicitudSeleccionada.set(null);
  }

  aceptarSolicitud(id: string) {
    this.solicitudes.update(list => list.filter(s => s.id !== id));
    this.cerrarModal();
  }
}