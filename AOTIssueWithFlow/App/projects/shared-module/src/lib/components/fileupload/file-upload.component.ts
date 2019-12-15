import {Component, Input, ViewChild, AfterViewInit, OnDestroy, OnInit, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { FlowDirective, Transfer } from '@flowjs/ngx-flow';
import { Subscription } from 'rxjs';
import { DocumentService, UploadFlowConfig, UploadInstance } from '../../services/Document.service';

@Component({
  selector: 'cust-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() autoUpload = false;
  @Input() multipleUpload = true;
  @Input() acceptedFileTypes: string;
  @Input() queryOptions: object = {};
  @Input() isBase64 = false;
  @Input() disableUpload = false;
  @Output() onSuccess = new EventEmitter();

  @ViewChild('flow') flow: FlowDirective;



  filesDragged = false;
  hideDropAreaText = false;
  flowConfig: UploadFlowConfig;
  uploadInstance: UploadInstance;

  constructor(
    public _documentService: DocumentService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.flowConfig = this._documentService.getFlowConfig(this.multipleUpload, this.queryOptions, this.acceptedFileTypes);
  }

  ngAfterViewInit() {
    this.uploadInstance = this._documentService.getUploadInstance(this.flow, this.autoUpload);
    this.uploadInstance.onFileSubmit = () => {
      this.hideDropAreaText = true;
      this.uploadInstance.onFileSubmit = null;
    };
    this._cdr.detectChanges();
  }

  ngOnDestroy() {
    this.uploadInstance.flowEventSubscription.unsubscribe();
  }

  getFormattedDate(milliSecond) {
    return '12/12/12';
  }

  getFormattedSize(sizeInBytes) {
    return 10005;
  }
}
