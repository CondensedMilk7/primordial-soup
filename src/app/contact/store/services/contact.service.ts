import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMessage } from '../../contact-message.model';

@Injectable()
export class ContactService {
  mockResponse = new Observable<string>((observer) => {
    setTimeout(() => {
      observer.next('Message sent!');
    }, 1000);
  });
  // Will stay like this untill backend is built
  sendMessage(message: ContactMessage) {
    console.log(message);
    return this.mockResponse;
  }
}
