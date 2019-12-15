import { Injectable, OnInit } from '@angular/core';
import { FlowDirective, Transfer } from '@flowjs/ngx-flow';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentOptions: DocumentOptions = null;
  uploadUrl = 'upload-document';
  validateUrl = 'validate-document';
  downloadUrl = 'download-document';
  documentOptionsUrl = 'document-options';


  constructor(
    private _http: HttpClient
  ) {
    this.getDocumentOptions();
  }

  getFlowConfig(multipleUpload: boolean, queryOptions: object, acceptedFileTypes): UploadFlowConfig {
    if (!multipleUpload) { multipleUpload = true; }

    return {
      target: this.uploadUrl,
      singleFile: !multipleUpload,
      testChunks: false,
      acceptedFileTypes: {
        accept: acceptedFileTypes ? acceptedFileTypes : '*'
      },
      queryOptions
    };
  }

  getUploadInstance(flow: FlowDirective, autoUpload: boolean): UploadInstance {
    // tslint:disable-next-line: prefer-const
    let tempInstance = null;

    const flowEventSubscription = flow.events$.subscribe((event) => {
      console.log('flowEventSubscription', autoUpload, event);

      if (autoUpload && event.type === 'filesSubmitted') {

        if (tempInstance.onFileSubmit) { tempInstance.onFileSubmit(); }
        flow.upload();
      }



      if (event.type === 'fileError' || event.type === 'error') {
        console.log(event);
      }

    });

    const startUpload = () => {
      console.log('startupload', flow);
      flow.upload();
      flow.flowJs.resume();
    };

    const pauseUpload = () => {
      flow.flowJs.pause();
    };

    const clearAllFiles = () => {
      flow.cancel();
    };

    const validateFile = (transfer: Transfer): boolean => {
      console.log('validateFile', transfer);
      return true;
    };

    const removeFile = (transfer: Transfer) => {
      flow.flowJs.removeFile(transfer.flowFile);
    };

    const retryFile = (transfer: Transfer) => {
      transfer.flowFile.retry();
    };

    tempInstance = {
      flow,
      flowEventSubscription,
      onFileSubmit: null,
      startUpload,
      pauseUpload,
      clearAllFiles,
      validateFile,
      removeFile,
      retryFile
    };
    return tempInstance;
  }

  uploadDocument() {
    const request = {};
   // this._http.post(null, this.uploadUrl, request);
    console.log('call document service');
  }

  downloadDocument(documentId) {
    const request = { documentId };
  }

  public Validate(file: flowjs.FlowFile) {

  }

  // initialValidation() {
  //   if (!this.documentOptions) { this.getDocumentOptions().then(this.initialValidation); return; }

  //   // if () - TODO: Validate if file size is not more than defined size.
  // }

  async getDocumentOptions(): Promise<DocumentOptions> {
    // let token = '';//await this._tokenManager.getToken();
    // let response = (await this._http.get(this.documentOptionsUrl, {
    //   headers: {
    //     'Authorization': 'Bearer ' + token,
    //     'Content-Type': 'application/json'
    //   }
    // }).toPromise()) as DocumentOptions;

   // this.documentOptions = response;
    console.log('get doc call');
    return null;
  }

  async validateDocument(request: ValidateRequest) {

    // let token = '';//await this._tokenManager.getToken();
    // let response = (await this._http.post(this.validateUrl, request, {
    //   headers: {
    //     'Authorization': 'Bearer ' + token,
    //     'Content-Type': 'application/json'
    //   }
    // }).toPromise()) as ValidateResponse;

    // console.log('validateResponse', request, response);
    // return response;
    console.log('validate doc call');
    return null;
  }

  private isFileSizeValid(file: any): boolean {
    if (this.documentOptions) {
      if (file.size <= this.documentOptions.maxSizeInBytes) {
        return true;
      }
      return false;
    }
    return true;
  }

  private isExtensionValid(file): boolean {
    if (this.documentOptions) {

    }
    return true
  }
}

export interface UploadFlowConfig {
  target: string;
  singleFile: boolean;
  testChunks: boolean;
  acceptedFileTypes: { accept: string; };
  queryOptions: object;
}

export interface UploadInstance {
  flow: FlowDirective;
  flowEventSubscription: Subscription;
  onFileSubmit(): void;
  startUpload(): void;
  pauseUpload(): void;
  clearAllFiles(): void;
  validateFile(file: Transfer): boolean;
  removeFile(file: Transfer): void;
  retryFile(file: Transfer): void;
}

export interface ValidateRequest {
  filename: string,
  content: any
}

export interface ValidateResponse {
  isSuccess: boolean,
  errorMessage: string
}

export interface DocumentOptions {
  maxSizeInBytes: number,
  extensionBlackList: Array<string>,
  mimeTypeBlackList: Array<string>,
  plainTextExtensionList: Array<string>
}
