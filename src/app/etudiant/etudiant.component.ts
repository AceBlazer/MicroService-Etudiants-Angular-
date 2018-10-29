import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-et',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  listef;
  listee;
  currFormation={id:-1};


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/formations").subscribe(data => {
      this.listef = data;
    }, err => {
      console.log(err);
    });
  }

  onGetEtudiants(f) {
    this.currFormation=f;
    this.http.get("http://localhost:8080/formations/"+f.id+"/etudiants").subscribe(data => {
      this.listee = data;
    }, err => {
      console.log(err);
    });
  }

}
