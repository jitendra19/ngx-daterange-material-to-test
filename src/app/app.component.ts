import { Component, ViewChild } from "@angular/core";
//import * as moment from 'moment';
import moment from "moment";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment()
        .subtract(1, "month")
        .startOf("month"),
      moment()
        .subtract(1, "month")
        .endOf("month")
    ],
    "Prev + Current": [
      moment()
        .subtract(1, "month")
        .startOf("month"),
      moment().endOf("month")
    ]
  };
  //selected = {startDate: moment(), endDate: moment()}

  @ViewChild("rangePicker", { static: false }) rangePicker;
}
