import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

//interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/img/projects/portf.png',
    alt: "Projeto Portfólio",
    title: 'Portfólio',
    width: '120px',
    height: '51px',
    description:'<p> Meu primeiro portfólio feito em julho de 2023, inicialmente como uma atividade da faculdade de Engenharia de Software na disicplina de aplicações web e móveis</p>',
    links: [
      {
        name: 'Github',
        href:'https://github.com/CarolFenixBr/CarolinePortfolioPessoal',
      }
    ]
  }
])
}
