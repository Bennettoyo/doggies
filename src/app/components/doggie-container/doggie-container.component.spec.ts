import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggieContainerComponent } from './doggie-container.component';

describe('DoggieContainerComponent', () => {
  let component: DoggieContainerComponent;
  let fixture: ComponentFixture<DoggieContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoggieContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoggieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
