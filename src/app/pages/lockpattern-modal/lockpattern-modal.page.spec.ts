import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LockpatternModalPage } from './lockpattern-modal.page';

describe('LockpatternModalPage', () => {
  let component: LockpatternModalPage;
  let fixture: ComponentFixture<LockpatternModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockpatternModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LockpatternModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
