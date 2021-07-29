import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  URL: string = 'http://localhost:4200/api/';

  constructor(private httpClient: HttpClient) { }

public getPolicies() {
    return this.httpClient.get(this.URL + 'policies');
}

public getPolicy(policyId: number) {
  return this.httpClient.get(`${this.URL + 'policies'}/${policyId}`);
}

public createPolicy(policy: {id: number, amount: number, userType: string, clientId: number, description: string}) {
  return this.httpClient.post(`${this.URL + 'policies'}`, policy);
}

public deletePolicy(policyId: number) {
  return this.httpClient.delete(`${this.URL + 'policies'}/${policyId}`);
}

public updatePolicy(policy: {id: number, amount: number, userType: string, clientId: number, description: string}) {
  return this.httpClient.put(`${this.URL + 'policies'}/${policy.id}`, policy);
}
}
