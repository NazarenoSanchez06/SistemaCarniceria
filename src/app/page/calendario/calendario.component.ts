import { Component, ElementRef } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const calendarEl = this.elementRef.nativeElement.querySelector('#calendar');

    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'dayGridMonth', // Vista inicial del calendario (mes)
        weekends: true, // Mostrar los fines de semana
        // Aquí puedes agregar más configuraciones según tus necesidades
      });

      calendar.render();
    }
  }

}
