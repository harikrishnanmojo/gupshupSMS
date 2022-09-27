import axios from 'axios';
import { url } from './constants';
import { SingleMessage } from './interfaces/single-message.interface';

export class MessageService {
  sendMessagePost(data: SingleMessage) {
    //TODO: Validate data
    return axios.post(url, data);
  }

  sendMessageGet(params: SingleMessage) {
    return axios.get(url, { params });
  }
  //TODO: Multiple message send logic
}
