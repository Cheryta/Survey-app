import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PicturePage } from './picture.page';

describe('PicturePage', () => {
  let component: PicturePage;
  let fixture: ComponentFixture<PicturePage>;

  beforeEach(async (() => {
    fixture = TestBed.createComponent(PicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
