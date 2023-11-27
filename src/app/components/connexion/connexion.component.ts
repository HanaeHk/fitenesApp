import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { }

  profileForm!: FormGroup;
  address!: FormGroup;
  buttonClicked = false;
 
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['',Validators.required,Validators.pattern( "^[a-z0-9_-]{8,15}$")],
      lastName: ['',Validators.required,Validators.pattern( "^[a-z0-9_-]{8,15}$")],
      email:['',Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+/.[a-z]{2,4}$")],
      numberPhone:['',Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      address:this.fb.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: [''],
        zip: ['']
      }),
      profil:['',Validators.required],
      aliases: this.fb.array([
        this.fb.control('')
      ])
  
    });
  }
 
 
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.router.navigate(['/coach']);
    } else {
      console.log('Veuillez remplir correctement le formulaire.');
    }

  }
  

}
