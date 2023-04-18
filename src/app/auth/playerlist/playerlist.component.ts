import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
})
export class PlayerlistComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'category', 'email', 'jersy'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private _auth: AuthService, private _http: HttpClient) {}

  ngOnInit(): void {
    console.log('init called');
    // this.getListData();
    this.getdata();
  }
  // getListData() {
  //   let y = this._auth.getlist();
  //   this.dataSource = new MatTableDataSource(y);
  //   // this.dataSource = dataSource12.data;
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   console.log(this.dataSource);

  //   console.log(this._auth.getlist());
  // }

  getdata(): any {
    this._http
      .get('https://cricket-14d0b-default-rtdb.firebaseio.com/team.json')
      .subscribe((res: any) => {
        if (res) {
          this.dataSource = new MatTableDataSource(res);
          // this.dataSource = dataSource12.data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
  }
}
