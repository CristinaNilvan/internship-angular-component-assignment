import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecipeByNameComponent } from './get-recipe-by-name.component';

describe('GetRecipeByNameComponent', () => {
  let component: GetRecipeByNameComponent;
  let fixture: ComponentFixture<GetRecipeByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetRecipeByNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetRecipeByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
