import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.css"],
  providers: [ApiService]
})
export class PlansComponent implements OnInit {
  plans1 = [];
  plans2 = [];
  plans3 = [];
  number: string;
  type: string;
  constructor(private api: ApiService) {
    // this.getPlans();
    this.number = this.api.getNum();
    this.type = this.api.getType();
    if (this.type == "") {
      this.getPostpaid();
      this.getPrepaid();
      this.getDongle();
    } else if (this.type == "Postpaid") {
      this.getPostpaid();
    } else if (this.type == "Prepaid") {
      this.getPrepaid();
    } else if (this.type == "Dongle") {
      this.getDongle();
    }
  }

  getPostpaid = () => {
    this.api.getPostpaid().subscribe(
      data => {
        this.plans1 = data;
        console.log(this.plans1);
      },
      error => {
        console.log(error);
      }
    );
  };

  getPrepaid = () => {
    this.api.getPrepaid().subscribe(
      data => {
        this.plans2 = data;
        console.log(this.plans2);
      },
      error => {
        console.log(error);
      }
    );
  };

  getDongle = () => {
    this.api.getDongle().subscribe(
      data => {
        this.plans3 = data;
        console.log(this.plans3);
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit() {}
}