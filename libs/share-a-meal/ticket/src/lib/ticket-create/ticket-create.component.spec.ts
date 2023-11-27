// import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';

// import { TicketCreateComponent } from './ticket-create.component';
// import { UserService } from '@avans-nx-workshop/user';
// import { TicketService } from '../ticket.service';

// describe('TicketCreateComponent', () => {
//   let component: TicketCreateComponent;
//   let fixture: ComponentFixture<TicketCreateComponent>;
//   let userService: jasmine.SpyObj<UserService>;
//   let ticketService: jasmine.SpyObj<TicketService>;

//   beforeEach(() => {
//     // Create spies for the UserService and TicketService
//     const userServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['getUsers']);
//     const ticketServiceSpy = jasmine.createSpyObj<TicketService>('TicketService', ['getTickets', 'addTicket']);

//     TestBed.configureTestingModule({
//       declarations: [TicketCreateComponent],
//       imports: [ReactiveFormsModule],
//       providers: [
//         { provide: ActivatedRoute, useValue: { paramMap: of({ get: () => '1' }) } },
//         { provide: UserService, useValue: userServiceSpy },
//         { provide: TicketService, useValue: ticketServiceSpy },
//       ],
//     }).compileComponents();

//     // Get instances of the services
//     userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
//     ticketService = TestBed.inject(TicketService) as jasmine.SpyObj<TicketService>;

//     fixture = TestBed.createComponent(TicketCreateComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize the form', () => {
//     // You can test the form initialization here
//     expect(component.ticketForm.get('title')).toBeTruthy();
//     // Add similar expectations for other form controls
//   });

//   it('should call UserService to get users on init', () => {
//     // Arrange
//     const mockUsers = [{ id: 1, firstName: 'John', lastName: 'Doe' }];
//     userService.getUsers.and.returnValue(mockUsers);

//     // Act
//     component.ngOnInit();

//     // Assert
//     expect(component.users).toEqual(mockUsers);
//   });

//   it('should call TicketService to add a ticket when the form is valid', fakeAsync(() => {
//     // Arrange
//     const mockTicket = { id: 1, title: 'Test Ticket', price: 20, date: new Date(), status: 'Active', seat: 1, owner: 1 };
//     const formValue = { title: 'Test Ticket', price: 20, date: new Date(), status: 'Active', seat: 1, owner: 1 };

//     // Mock the form value
//     component.ticketForm.setValue(formValue);

//     // Act
//     component.saveTicket();
//     tick();

//     // Assert
//     expect(ticketService.addTicket).toHaveBeenCalledWith(jasmine.objectContaining(mockTicket));
//   });

//   it('should not call TicketService to add a ticket when the form is invalid', fakeAsync(() => {
//     // Arrange
//     component.ticketForm.setErrors({ invalid: true });

//     // Act
//     component.saveTicket();
//     tick();

//     // Assert
//     expect(ticketService.addTicket).not.toHaveBeenCalled();
//   });
// });
