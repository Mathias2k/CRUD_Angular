import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReclamacaoComponent } from './reclamacao.component';

describe('ReclamacaoComponent', () => {
  let component: ReclamacaoComponent;
  let fixture: ComponentFixture<ReclamacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
