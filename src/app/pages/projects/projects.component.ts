import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsData } from 'src/app/models/projects.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  dataItem: ProjectsData[] = [];
  idItem: string | undefined;
  constructor(
    private cardService: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cardService
      .getData()
      .subscribe((results) => (this.dataItem = results));
    this.idItem = this.route.snapshot.params['id'];
  }
}
