import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BienvenuePage } from './bienvenue.page';

describe('BienvenuePage', () => {
  let component: BienvenuePage;
  let fixture: ComponentFixture<BienvenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BienvenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
