import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ReclamacaoApiService } from 'src/app/reclamacao-api.service';

@Component({
  selector: 'app-add-edit-reclamacao',
  templateUrl: './add-edit-reclamacao.component.html',
  styleUrls: ['./add-edit-reclamacao.component.css']
})
export class AddEditReclamacaoComponent implements OnInit {

  today = new Date();
  submitted = false;
  onSubmit() { this.submitted = true; }

  showFormControls(form: any) {
    return form &&
    form.controls.cliente && form.controls.cliente.value &&
    form.controls.telefoneCliente && form.controls.telefoneCliente.value &&
    form.controls.cpf && form.controls.cpf.value &&
    form.controls.descricao && form.controls.descricao.value &&
    form.controls.criadoEm && form.controls.criadoEm.value
  }

  reclamacaoList$!: Observable<any[]>;

  constructor(private service:ReclamacaoApiService) { }

  @Input() reclamacao:any;
   protocolo: number = 0;
   cliente: string = "";
   telefoneCliente: number = 0;
   reclamante: string = "";   
   telefoneReclamante: number = 0; 
   nomeDoReclamado: string = "";   
   areaDoReclamado: string = "";   
   cpf: string = "";
   descricao: string = "";
   criadoPor: string = "";
   criadoEm = this.today;
   loja: string = "";

  ngOnInit(): void {
    this.cliente = this.reclamacao.cliente;
    this.cpf = this.reclamacao.cpf;
    this.telefoneCliente = this.reclamacao.telefoneCliente;
    this.reclamante = this.reclamacao.reclamante;
    this.telefoneReclamante = this.reclamacao.telefoneReclamante;
    this.nomeDoReclamado = this.reclamacao.nomeDoReclamado; 
    this.areaDoReclamado = this.reclamacao.areaDoReclamado;
    this.descricao = this.reclamacao.descricao;
    this.criadoPor = this.reclamacao.criadoPor;
    this.criadoEm = this.reclamacao.criadoEm;
    this.loja = this.reclamacao.loja;
    this.reclamacaoList$ = this.service.getReclamacaoList();
  }

  addReclamacao() {
    var reclamacao = {
      cliente:this.cliente,
      cpf:this.cpf,
      telefoneCliente: this.telefoneCliente,
      reclamante: this.reclamante,
      telefoneReclamante: this.telefoneReclamante,
      nomeDoReclamado: this.nomeDoReclamado,
      areaDoReclamado: this.areaDoReclamado,
      descricao:this.descricao,
      criadoPor: this.criadoPor,
      criadoEm:this.criadoEm,
      loja: this.loja
    }
    this.service.addReclamacao(reclamacao).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 5000);
    })
  }

  updateReclamacao() {
    var reclamacao = {
      protocolo:this.protocolo,
      cliente:this.cliente,
      cpf:this.cpf,
      telefoneCliente: this.telefoneCliente,
      reclamante: this.reclamante,
      telefoneReclamante: this.telefoneReclamante,
      nomeDoReclamado: this.nomeDoReclamado,
      areaDoReclamado: this.areaDoReclamado,
      descricao:this.descricao,
      criadoPor: this.criadoPor,
      criadoEm:this.criadoEm,
      loja: this.loja
    }
    var protocolo:number = this.protocolo;
    this.service.updateReclamacao(protocolo,reclamacao).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 5000);
    })
  }
}