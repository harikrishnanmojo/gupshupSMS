import { MessageFormat } from '../enums/message-format.enum';
import { MessageType } from '../enums/message-type.enum';

export interface SingleMessage {
  userid: string;
  password: string;
  send_to: string | string[];
  msg: string;
  auth_scheme: string;
  method: string;
  v: number;
  format: MessageFormat;
  msg_type: MessageType;
  port?: number;
  timestamp?: Date;
  mask?: string;
  msg_id?: string;
  extra?: string;
  principalEntityId?: number;
  dltTemplateId?: number;
}
