import { Component,OnInit,AfterViewChecked,ElementRef,ViewChild } from '@angular/core';
import { DxTextAreaModule,DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

interface Message {
  sender: string;
  text: string;
  timestamp: number;
}

@Component({
  selector: 'app-messagerie',
  standalone:true,
  imports: [DxTextAreaModule, DxButtonModule, CommonModule],
  templateUrl: './messagerie.html',
  styleUrl: './messagerie.css'
})
export class Messagerie  implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  agentEnLigne = true;
  nouveauMessage = '';
  messages: Message[] = [];

  ngOnInit() {
    this.chargerMessages();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  chargerMessages() {
    const stored = localStorage.getItem('chatMessages');
    this.messages = stored ? JSON.parse(stored) : [];
  }

  sauvegarderMessages() {
    localStorage.setItem('chatMessages', JSON.stringify(this.messages));
  }

  envoyerMessage() {
    if (this.nouveauMessage.trim()) {
      this.messages.push({
        sender: 'Client',
        text: this.nouveauMessage,
        timestamp: Date.now()
      });
      this.sauvegarderMessages();
      this.nouveauMessage = '';
    }
  }

  scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}