import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormModel } from 'src/app/Models/ContactFormModel';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

  ContactModel = new ContactFormModel(); //creamos una instancia de nuestro modelo


  public mensajeError: string;
  public mensajePassword: string;
  public edadCorrecta: boolean; //booleanas para comprobacion de las password
  public direccionCorrecta: boolean; //booleanas para comprobacion de las password
  public nombreCorrecto: boolean;
  public apellidosCorrectos: boolean;
  public telefonoCorrecto: boolean;
  public mailCorrecto: boolean;
  public camposCorrectos: boolean;

  constructor(){}

  ngOnInit(): void {
          /*En el inicio dejamos los mensajes de error sin mostrat */
          this.mensajeError = '';
          this.mensajePassword = '';
  }


    /*CREAMOS NUESTRAS VARIABLES Y NUESTRA VARIABLE DEL MODELO "CONTACTMODEL"*/
  

  
    onSubmit(formulario: NgForm) {
      //llamamos al servicio y el método que contiene
      alert('Formulario enviado correctamente');
    }

  
    /*METODOS PARA VALIDAR CAMPOS OBLIGATORIOS*/
    public validarCamposObligatorios(evento: any): void {
  
      //Hacemos un switch para que ejecute un codigo en funcion del input que se ha modificado
      switch (evento.target.name) {
        case 'nombre':
          const inputNombre = document.getElementById('nombre');
          if (this.ContactModel.nombre.length  >= 3  && /^[A-Z ]+$/i.test(this.ContactModel.nombre)) {
            inputNombre?.classList.remove('is-invalid');
            this.nombreCorrecto = true;
          } else {
            inputNombre?.classList.add('is-invalid');
            this.nombreCorrecto = false;
          }
          break;
  
        case 'apellidos':
          const inputApellidos = document.getElementById('apellidos');
          if (this.ContactModel.apellidos.length >= 3 && /^[A-Z ]+$/i.test(this.ContactModel.apellidos)) {
            inputApellidos?.classList.remove('is-invalid');
            this.apellidosCorrectos = true;
          } else {
            inputApellidos?.classList.add('is-invalid');
            this.apellidosCorrectos = false;
          }
          break;

          case 'direccion':
            const inputDireccion = document.getElementById('direccion');
            if (this.ContactModel.direccion.length >= 5) {
              inputDireccion?.classList.remove('is-invalid');
              this.direccionCorrecta = true;
            } else {
              inputDireccion?.classList.add('is-invalid');
              this.direccionCorrecta = false;
            }
            break;

          case 'edad':
            const edadExpresion = {
                edad: /^\d{2}$/
                }
            const inputEdad = document.getElementById('edad');
            if (edadExpresion.edad.test(evento.target.value)) {
              inputEdad?.classList.remove('is-invalid');
              this.edadCorrecta = true;
            } else {
              inputEdad?.classList.add('is-invalid');
              this.edadCorrecta = false;
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
      }
    }
  
    /*METODO COMPROBACION DE BOOLENAS DE CAMPOS OBLIGATORIOS PARA ACTIVAR EL BOTON DEL FORMULARIO*/
    public comprobarCamposObligatorios(camposCorrectos: boolean): boolean {
      if(this.nombreCorrecto == true &&
        this.apellidosCorrectos == true &&
        this.telefonoCorrecto == true &&
        this.mailCorrecto == true &&
        this.edadCorrecta == true &&
        this.direccionCorrecta == true) {
          camposCorrectos = true;
      } else {
        camposCorrectos = false
      }
      return camposCorrectos;
    }
    
  }
  
  
