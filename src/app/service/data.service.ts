import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  policies =  [
     {  id:  1,  num:  'Ins_1', amount: 1000, userType: 'user', clientId: 1, description: 'Insurance policy number PN1' },
     {  id:  2,  num:  'Ins_2', amount: 2000, userType: 'user', clientId: 2, description: 'Insurance policy number PN2' },
     {  id:  3,  num:  'Ins_3', amount: 3000, userType: 'user', clientId: 3, description: 'Insurance policy number PN3' },
     {  id:  4,  num:  'Ins_4', amount: 4000, userType: 'user', clientId: 4, description: 'Insurance policy number PN4' },
     {  id:  5,  num:  'Ins_5', amount: 5000, userType: 'user', clientId: 5, description: 'Insurance policy number PN5' },
     {  id:  6,  num:  'Ins_6', amount: 6000, userType: 'user', clientId: 6, description: 'Insurance policy number PN6' },
     {  id:  7,  num:  'Ins_7', amount: 7000, userType: 'user', clientId: 7, description: 'Insurance policy number PN7' },
     {  id:  8,  num:  'Ins_8', amount: 8000, userType: 'user', clientId: 8, description: 'Insurance policy number PN8' },
     {  id:  9,  num:  'Ins_9', amount: 9000, userType: 'user', clientId: 9, description: 'Insurance policy number PN9' },
     {  id:  10,  num:  'Ins_10', amount: 10000, userType: 'user', clientId: 10, description: 'Insurance policy number PN10' },
     {  id:  11,  num:  'Ins_11', amount: 11000, userType: 'user', clientId: 11, description: 'Insurance policy number PN11' },
     {  id:  12,  num:  'Ins_12', amount: 12000, userType: 'user', clientId: 12, description: 'Insurance policy number PN12' },
     {  id:  13,  num:  'Ins_13', amount: 13000, userType: 'user', clientId: 13, description: 'Insurance policy number PN13' },
     {  id:  14,  num:  'Ins_14', amount: 14000, userType: 'user', clientId: 14, description: 'Insurance policy number PN14' },
     {  id:  15,  num:  'Ins_15', amount: 15000, userType: 'user', clientId: 15, description: 'Insurance policy number PN15' },
     {  id:  16,  num:  'Ins_16', amount: 16000, userType: 'user', clientId: 16, description: 'Insurance policy number PN16' },
     {  id:  17,  num:  'Ins_17', amount: 17000, userType: 'user', clientId: 17, description: 'Insurance policy number PN17' },
     {  id:  18,  num:  'Ins_18', amount: 18000, userType: 'user', clientId: 18, description: 'Insurance policy number PN18' },
     {  id:  19,  num:  'Ins_19', amount: 19000, userType: 'user', clientId: 19, description: 'Insurance policy number PN19' },
     {  id:  20,  num:  'Ins_20', amount: 20000, userType: 'user', clientId: 20, description: 'Insurance policy number PN20' },
     {  id:  21,  num:  'Ins_21', amount: 21000, userType: 'user', clientId: 21, description: 'Insurance policy number PN21' },
     {  id:  22,  num:  'Ins_22', amount: 22000, userType: 'user', clientId: 22, description: 'Insurance policy number PN22' },
     {  id:  23,  num:  'Ins_23', amount: 23000, userType: 'user', clientId: 23, description: 'Insurance policy number PN23' },
     {  id:  24,  num:  'Ins_24', amount: 24000, userType: 'user', clientId: 24, description: 'Insurance policy number PN24' },
     {  id:  25,  num:  'Ins_25', amount: 25000, userType: 'user', clientId: 25, description: 'Insurance policy number PN25' }
    ];
 
    return {policies};
 
   }

}
