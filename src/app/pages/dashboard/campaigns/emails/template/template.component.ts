import { Component, ViewChild, ViewEncapsulation, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailEditorComponent, EmailEditorModule } from 'angular-email-editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [CommonModule, EmailEditorModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TemplateComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard/campaigns/emails']);
  }
  
  
  @ViewChild('emailEditor') emailEditor!: EmailEditorComponent;

  editorLoaded() {
    console.log('editorLoaded');
  }

  editorReady() {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => console.log('exportHtml', data));
  }
}