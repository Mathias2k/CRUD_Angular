import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReclamacaoApiService } from 'src/app/reclamacao-api.service';

@Component({
  selector: 'app-reclamacao',
  templateUrl: './reclamacao.component.html',
  styleUrls: ['./reclamacao.component.css']
})
export class ReclamacaoComponent implements OnInit {

  reclamacaoList$!:Observable<any[]>;

  constructor(private service:ReclamacaoApiService) { }

  ngOnInit(): void {
    this.reclamacaoList$ = this.service.getReclamacaoList();
  }

    // Variables (properties)
    modalTitle:string = '';
    activateAddEditReclamacaoComponent:boolean = false;
    reclamacao:any;

    modalAdd() {
      this.reclamacao = {
        id:0,
        cliente:null,
        cpf:null,
        modelo:null,
        garantia:null,
        seguro:null,
        comentarios:null
      }
      this.modalTitle = "Adicionar Reclamação";
      this.activateAddEditReclamacaoComponent = true;
    }

    modalEdit(item:any) {
      this.reclamacao = item;
      this.modalTitle = "Editar Reclamação";
      this.activateAddEditReclamacaoComponent = true;
    }

    delete(item:any) {
      if(confirm(`Tem certeza que quer apagar o item de código: ${item.id}?`)) {
        this.service.deleteReclamacao(item.id).subscribe(res => {
          var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 5000);
        this.reclamacaoList$ = this.service.getReclamacaoList();
        })
      }
    }

    modalClose() {
      this.activateAddEditReclamacaoComponent = false;
      this.reclamacaoList$ = this.service.getReclamacaoList();
    }
}
