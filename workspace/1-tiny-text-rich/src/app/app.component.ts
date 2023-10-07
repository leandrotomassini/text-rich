import { Component, ViewChild } from '@angular/core';

declare var tinymce: any; // Declarar tinymce como variable global

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myEditor') myEditor: any;
  editorContent = '';

  guardarContenido() {
    // Obtener el contenido del editor
    const content = this.myEditor.editor.getContent();

    // Mostrar el contenido en la consola
    console.log(content);

    // También puedes asignar el contenido a una variable si lo necesitas en otro lugar
    this.editorContent = content;
  }
}
