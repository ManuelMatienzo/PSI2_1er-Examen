import { Component, signal } from '@angular/core';

export interface RecursoOperativo {
  id: string;
  tipo: 'Mecánico' | 'Grúa' | 'Vehículo de Asistencia';
  nombre: string;
  identificador: string; // Ej: Placa o Especialidad
  estado: 'Disponible' | 'En Ruta' | 'Inactivo';
}

@Component({
  selector: 'app-taller-recursos',
  standalone: true,
  templateUrl: './taller-recursos.html'
})
export class TallerRecursos {
  // Base de datos simulada de los recursos del taller
  recursos = signal<RecursoOperativo[]>([
    { id: 'REC-01', tipo: 'Grúa', nombre: 'Grúa Pesada Plana', identificador: 'Placa: 4589-XYZ', estado: 'Disponible' },
    { id: 'REC-02', tipo: 'Mecánico', nombre: 'Juan Pérez', identificador: 'Especialista Eléctrico', estado: 'En Ruta' },
    { id: 'REC-03', tipo: 'Vehículo de Asistencia', nombre: 'Moto Rápida 1', identificador: 'Placa: 1122-ABC', estado: 'Disponible' },
    { id: 'REC-04', tipo: 'Mecánico', nombre: 'Carlos Mendoza', identificador: 'Mecánico General', estado: 'Inactivo' }
  ]);

  // Función para alternar el estado rápidamente
  cambiarEstado(recurso: RecursoOperativo) {
    const estados: ('Disponible' | 'En Ruta' | 'Inactivo')[] = ['Disponible', 'En Ruta', 'Inactivo'];
    const indiceActual = estados.indexOf(recurso.estado);
    const nuevoEstado = estados[(indiceActual + 1) % estados.length];

    this.recursos.update(lista => 
      lista.map(r => r.id === recurso.id ? { ...r, estado: nuevoEstado } : r)
    );
  }
}