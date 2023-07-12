import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatCharacteristicsComponent } from './meat-characteristics.component';

describe('MeatCharacteristicsComponent', () => {
  let component: MeatCharacteristicsComponent;
  let fixture: ComponentFixture<MeatCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatCharacteristicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
