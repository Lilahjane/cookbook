import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingTestComponent } from './styling-test.component';

describe('StylingTestComponent', () => {
  let component: StylingTestComponent;
  let fixture: ComponentFixture<StylingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylingTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
