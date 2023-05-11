import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUsModel } from 'src/app/Models/ContactUsModel';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  ContactUsForm = new ContactUsModel()

  public nombreCorrecto: boolean;
  public telefonoCorrecto: boolean;
  public mailCorrecto: boolean;
  public mensajeCorrecto: boolean;
  public camposCorrectos: boolean;

  constructor(){}

  ngOnInit(){
  }

  onSubmit(formulario: NgForm) {
    alert('Formulario enviado correctamente');
  }

  /*METODOS PARA VALIDAR CAMPOS OBLIGATORIOS*/
  public validarCamposObligatorios(evento: any): void {
  
    //Hacemos un switch para que ejecute un codigo en funcion del input que se ha modificado
    switch (evento.target.name) {
      case 'nombre':
        const inputNombre = document.getElementById('nombre');
        if (this.ContactUsForm.nombre.length  >= 3  && /^[A-Z ]+$/i.test(this.ContactUsForm.nombre)) {
          inputNombre?.classList.remove('is-invalid');
          this.nombreCorrecto = true;
        } else {
          inputNombre?.classList.add('is-invalid');
          this.nombreCorrecto = false;
        }
        break;


      case 'numeroTelefono':
        const telefonoExpresion = {
            telefono: /^\d{9}$/
            }
        const inputTelefono = document.getElementById('telefono');
        if (telefonoExpresion.telefono.test(evento.target.value)) {
          inputTelefono?.classList.remove('is-invalid');
          this.telefonoCorrecto = true;
        } else {
          inputTelefono?.classList.add('is-invalid');
          this.telefonoCorrecto = false;
        }
        break;

      case 'email':
        const mailExpresionn = {
            email: /\S+@\S+\.\S+/,
            }
        const inputMail = document.getElementById('email');
        if (mailExpresionn.email.test(evento.target.value)) {
          inputMail?.classList.remove('is-invalid');
          this.mailCorrecto = true;
        } else {
          inputMail?.classList.add('is-invalid');
          this.mailCorrecto = false;
        }
        break;

        case 'mensaje':
          const inputMensaje = document.getElementById('mensaje');
          if (this.ContactUsForm.mensaje.length  >= 10) {
            inputMensaje?.classList.remove('is-invalid');
            this.mensajeCorrecto = true;
          } else {
            inputMensaje?.classList.add('is-invalid');
            this.mensajeCorrecto = false;
          }
          break;
    }

  }


      /*METODO COMPROBACION DE BOOLENAS DE CAMPOS OBLIGATORIOS PARA ACTIVAR EL BOTON DEL FORMULARIO*/
      public comprobarCamposObligatorios(camposCorrectos: boolean): boolean {
        if(this.nombreCorrecto &&
          this.telefonoCorrecto &&
          this.mailCorrecto &&
          this.mensajeCorrecto) {
            camposCorrectos = true;
        } else {
          camposCorrectos = false
        }
        return camposCorrectos;
      }
  
}
