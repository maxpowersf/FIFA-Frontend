import { Component } from '@angular/core';

export enum LoadingMode {
  Loading = '0',
  Saving = '1',
  Retrieving = '2',
  Updating = '3',
  Creating = '4',
}

const MESSAGE_LOADING = 'Loading...';
const MESSAGE_SAVING = 'Saving...';
const MESSAGE_RETRIEVING = 'Retrieving...';
const MESSAGE_UPDATING = 'Updating ranking...';
const MESSAGE_CREATING = 'Creating new period...';

@Component({
  selector: 'app-block-template',
  templateUrl: './block-template.component.html',
  styleUrls: ['./block-template.component.css'],
})
export class BlockTemplateComponent {
  message: any;

  getMessage(): string {
    switch (this.message) {
      case LoadingMode.Loading:
        return MESSAGE_LOADING;
      case LoadingMode.Saving:
        return MESSAGE_SAVING;
      case LoadingMode.Retrieving:
        return MESSAGE_RETRIEVING;
      case LoadingMode.Updating:
        return MESSAGE_UPDATING;
      case LoadingMode.Creating:
        return MESSAGE_CREATING;
      default:
        return MESSAGE_LOADING;
    }
  }
}
