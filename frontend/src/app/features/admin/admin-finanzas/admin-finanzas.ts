import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export interface Liquidacion {
  id: string;
  taller: string;
  fecha: string;
  montoTotal: number;
  comision: number; // El 10% para la plataforma
  estado: 'Cobrado' | 'Pendiente';
}

@Component({
  selector: 'app-admin-finanzas',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './admin-finanzas.html'
})
export class AdminFinanzas {
  // Simulamos los pagos de los talleres
  liquidaciones = signal<Liquidacion[]>([
    { id: 'TRX-9021', taller: 'Taller "El Rápido"', fecha: '18 Abr 2026', montoTotal: 350.00, comision: 35.00, estado: 'Pendiente' },
    { id: 'TRX-9020', taller: 'Mecánica Sur', fecha: '17 Abr 2026', montoTotal: 1200.00, comision: 120.00, estado: 'Cobrado' },
    { id: 'TRX-9019', taller: 'Taller "El Rápido"', fecha: '15 Abr 2026', montoTotal: 450.00, comision: 45.00, estado: 'Cobrado' },
    { id: 'TRX-9018', taller: 'AutoFix Center', fecha: '14 Abr 2026', montoTotal: 800.00, comision: 80.00, estado: 'Cobrado' }
  ]);

  // Cálculos automáticos (Reactividad con Signals)
  ingresosTotales = computed(() => this.liquidaciones().reduce((acc, curr) => acc + curr.comision, 0));
  porCobrar = computed(() => 
    this.liquidaciones().filter(l => l.estado === 'Pendiente').reduce((acc, curr) => acc + curr.comision, 0)
  );

  marcarComoCobrado(id: string) {
    this.liquidaciones.update(lista => 
      lista.map(liq => liq.id === id ? { ...liq, estado: 'Cobrado' } : liq)
    );
  }
}