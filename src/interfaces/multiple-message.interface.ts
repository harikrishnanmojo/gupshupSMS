export interface MultipleMessage {
  Method: 'xlsUpload';
  filetype: 'xls' | 'csv' | 'zip';
  msg_type: 'Text' | 'Unicode_text' | 'flash' | 'binary';
  port: number;
  timestamp: Date;
}
