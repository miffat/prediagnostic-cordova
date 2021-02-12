import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmittedDetailsPage } from './submitted-details.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('SubmittedDetailsPage', () => {
  let component: SubmittedDetailsPage;
  let fixture: ComponentFixture<SubmittedDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmittedDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
