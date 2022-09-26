export interface SingleMessage {
  userid: string;
  password: string;
  send_to: number[];
  msg: string;
  auth_scheme: string;
  method: string;
  v: number;
  format: 'TEXT' | 'XML' | 'JSON';
  msg_type: 'Text' | 'Unicode_text' | 'flash' | 'VCARD' | 'binary';
  port?: number;
  timestamp?: Date;
  mask?: string;
  msg_id?: string;
  extra?: string;
  principalEntityId?: number;
  dltTemplateId?: number;
}
