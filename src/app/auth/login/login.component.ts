// import { Component, OnInit } from '@angular/core';
// // import { SessionService } from '../../services/session.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   user = {
//     username: '',
//     password: ''
//   };

//   error: String;
  
//   constructor(
//     // private session: SessionService,
//     private router: Router,
//   ) { }

//   ngOnInit() {
//   }

//   login(){
//     this.session.login(this.user)
//       .subscribe(
//         user => {
//           this.router.navigate(['home'])
//         },
//         err => {
//           this.error = err;
//         }
//       )
//   }


// }
