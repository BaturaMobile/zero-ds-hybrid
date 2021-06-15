import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroAvatarGroupComponent } from './zero-avatar-group.component';

describe('ZeroAvatarGroupComponent', () => {
  let component: ZeroAvatarGroupComponent;
  let fixture: ComponentFixture<ZeroAvatarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZeroAvatarGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroAvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
