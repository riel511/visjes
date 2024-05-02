import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisVijverComponent } from './vis-vijver.component';

describe('VisVijverComponent', () => {
  let component: VisVijverComponent;
  let fixture: ComponentFixture<VisVijverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisVijverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisVijverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
