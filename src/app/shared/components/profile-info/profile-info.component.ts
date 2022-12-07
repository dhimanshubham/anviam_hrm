import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  template: ` <div
    class="container1 mb-3 mt-4"
    [ngClass]="userDetails ? 'd-flex align-items-center gap-2' : ' '"
  >
    <div class="profile">
      <div class="mx-auto my-2 custom-profile">
        <img
          [src]="
            data?.pImage
              ? data.pImage
              : './assets/logo/blank-profile-picture.webp'
          "
          class="mw-100 mh-100 w-100 h-auto rounded-circle user-image"
        />
      </div>
      <div *ngIf="name != null" class="user-name text-center">
        <h6 class="text-white">
          {{ name ? name : 'Anonymous' }}
        </h6>
      </div>
    </div>
    <div class="user-details" *ngIf="userDetails != null">
      <h4 class="">Nabullah Ansari</h4>
      <p class="p3">Angular Developer</p>
      <p class="p4">Angular Department</p>
    </div>
  </div>`,
  styles: ['.custom-profile { width: 100px;height: 100px;}'],
})
export class ProfileInfoComponent implements OnInit {
  @Input() data!: any;
  @Input() name: any = null;
  @Input() userDetails: any = null;
  constructor() {}

  ngOnInit(): void {}
}
