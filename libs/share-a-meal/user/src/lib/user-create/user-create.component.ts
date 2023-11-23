import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User, UserGender, UserRole } from '@avans-nx-workshop/shared/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';

@Component({
  selector: 'clientside-nx-workshop-user-create',
  templateUrl: './user-create.component.html',
  styles: [],
})
export class UserCreateComponent implements OnInit {
  userForm!: FormGroup;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: [''],
      role: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId);
    });

    this.patchFormWithUserData();
  }

  saveUser(): void {
    if (this.userForm.valid) {
      const newUser = {
        id: this.userService.getUsers().length + 1, // Generate ID based on array length
        ...this.userForm.value,
      };
      
      console.log('New User:', newUser);
      
      // Add the new user to the array
      this.userService.addUser(newUser);
    } else {
      console.log('Form is invalid');
    }
  }



  private patchFormWithUserData(): void {
    if (this.user) {
      this.userForm.patchValue({

      });
    }
  }
}
