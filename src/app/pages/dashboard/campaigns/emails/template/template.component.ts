import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent, EmailEditorModule } from 'angular-email-editor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, EmailEditorModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @ViewChild('emailEditor') emailEditor!: EmailEditorComponent;

  editorLoaded() {
    console.log('editorLoaded');
    // load the design JSON here
    // this.emailEditor.editor.loadDesign({});
  }

  editorReady() {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => console.log('exportHtml', data));
  }
}