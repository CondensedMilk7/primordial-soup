import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactMessage } from '../../contact-message.model';
import { ContactSuccessResponse } from '../models';

@Injectable()
export class ContactService {
  contactUrl = environment.contactUrl;

  constructor(private httpClient: HttpClient) {}

  sendMessage(message: ContactMessage) {
    return this.httpClient.post<ContactSuccessResponse>(
      this.contactUrl,
      message
    );
  }
}
