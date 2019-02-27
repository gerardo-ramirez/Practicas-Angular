import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadaApiComponent } from './llamada-api.component';

describe('LlamadaApiComponent', () => {
  let component: LlamadaApiComponent;
  let fixture: ComponentFixture<LlamadaApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlamadaApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamadaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
