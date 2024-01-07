import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagefrontComponent } from './homepagefront.component';

describe('HomepagefrontComponent', () => {
  let component: HomepagefrontComponent;
  let fixture: ComponentFixture<HomepagefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagefrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
