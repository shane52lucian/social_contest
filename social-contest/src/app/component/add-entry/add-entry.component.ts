import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entry } from 'src/app/Entry';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit{

  @Output() onAddEntry: EventEmitter<Entry> = new EventEmitter();

  submitter_name?: string;
  email?: string;
  phone_number?: string;
  upload_photo?: string;
  subject_name?: string;
  description?: string;
  
  url: string = 'https://via.placeholder.com/500x300.png?text=upload-image';
  validator_text: string = "";
  showAddEntry?: boolean;
  subscription?: Subscription;
  
  ngOnInit(): void { }
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddEntry = value));
  }


  onSelect(event: any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.upload_photo = event.target.result;
        // console.log(this.upload_photo);
      };
    }
  }

  onSubmit() {

    // build validation
    if (!this.submitter_name) {
      this.validator_text = "Missing Name!"
      return;
    }
    if (!this.email) {
      this.validator_text = "Missing Email!"
      return;
    }
    if (!this.upload_photo) {
      this.validator_text = "Missing Photo!"
      return;
    }
    if (!this.subject_name) {
      this.validator_text = "Missing Photo Name!"
      return;
    }

    const newEntry = {

      submitter_name: this.submitter_name,
      email: this.email,
      phone_number: this.phone_number,
      upload_photo: this.upload_photo, 
      subject_name: this.subject_name,
      description: this.description,
      votes: 0,
    }

    this.onAddEntry.emit(newEntry);

    // form resets

    this.submitter_name = "";
    this.email = "";
    this.phone_number = "";
    this.upload_photo = "";
    this.subject_name = "";
    this.description = "";

    this.url = 'https://via.placeholder.com/500x300.png?text=upload-image';

  }




}
