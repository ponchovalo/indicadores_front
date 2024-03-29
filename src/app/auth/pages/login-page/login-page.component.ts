import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private messaggeService = inject(MessageService);
  
  private authService = inject( AuthService );

  public myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })


  login(){
    const { username, password } = this.myForm.value;
    console.log('antes')
    this.authService.login(username, password)
      .subscribe({
        //next:() => this.router.navigateByUrl('dashboard),
        error: (message) => {
          const msj: string = message.toUpperCase();
          this.messaggeService.add({severity: 'error', summary: 'Error', detail: msj })
        }
      })
  }
  
}
