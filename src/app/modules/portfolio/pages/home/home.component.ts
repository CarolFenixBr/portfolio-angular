import { Component } from '@angular/core';
//components
import { HeaderComponent } from '../../componenets/header/header.component';
import { KnowledgeComponent } from '../../componenets/knowledge/knowledge.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
