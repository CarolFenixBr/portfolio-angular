import { Component } from '@angular/core';
//components
import { HeaderComponent } from '../../components/header/header.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { KnowledgeComponent  } from "../../components/knowledge/knowledge.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, KnowledgeComponent, ExperienceComponent, HeaderComponent, KnowledgeComponent]
})
export class HomeComponent {

}
