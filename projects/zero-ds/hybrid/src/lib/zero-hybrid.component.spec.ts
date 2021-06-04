import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroHybridComponent } from './zero-hybrid.component';

describe('ZeroHybridComponent', () => {
  let component: ZeroHybridComponent;
  let fixture: ComponentFixture<ZeroHybridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZeroHybridComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroHybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
