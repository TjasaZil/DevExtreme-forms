import { Component } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent {
  successMessage: string = '';

  submitButtonOptions = {
    text: 'Submit the Data',
    useSubmitBehavior: true,
  };
  handleSubmit = (e: any) => {
    setTimeout(() => {
      this.successMessage = 'Successfully submitted';
      //alert('Submitted');
    }, 1000);

    e.preventDefault();
  };
}
