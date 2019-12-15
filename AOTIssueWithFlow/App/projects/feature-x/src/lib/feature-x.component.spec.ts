import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureXComponent } from './feature-x.component';

describe('FeatureXComponent', () => {
  let component: FeatureXComponent;
  let fixture: ComponentFixture<FeatureXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
