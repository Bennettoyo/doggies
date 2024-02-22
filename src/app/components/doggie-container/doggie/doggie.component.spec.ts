import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggieComponent } from './doggie.component';

describe('DoggieComponent', () => {
  let component: DoggieComponent;
  let fixture: ComponentFixture<DoggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoggieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
