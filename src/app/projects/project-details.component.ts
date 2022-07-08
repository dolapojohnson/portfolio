import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from './project';
import { ProjectService } from './project.service'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit, OnDestroy {
  projectSectionTitle: string = 'my Projects';
  errorMessage: string = '';
  projects: IProject[] = [];
  sub!: Subscription;

  constructor(private productService: ProjectService ) { }

  ngOnInit(): void {
    this.sub = this.productService.getProjects().subscribe({
      next: projects => this.projects = projects,
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
