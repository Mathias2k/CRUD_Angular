import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditReclamacaoComponent } from './add-edit-reclamacao.component';

describe('AddEditReclamacaoComponent', () => {
  let component: AddEditReclamacaoComponent;
  let fixture: ComponentFixture<AddEditReclamacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditReclamacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReclamacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
