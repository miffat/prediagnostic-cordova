import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TncModalPage } from './tnc-modal.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('TncModalPage', () => {
  let component: TncModalPage;
  let fixture: ComponentFixture<TncModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TncModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TncModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
