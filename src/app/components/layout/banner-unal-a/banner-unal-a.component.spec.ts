import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerUnalAComponent } from './banner-unal-a.component';

describe('HeaderRowComponent', () => {
  let component: BannerUnalAComponent;
  let fixture: ComponentFixture<BannerUnalAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerUnalAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerUnalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
