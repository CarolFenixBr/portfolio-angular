import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/Knowledge.interface';



@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icons/html.svg',
      alt: 'ícones de conhecimento HTML5',
    },
    {
      src:'assets/icons/css.svg',
      alt: 'ícones de conhecimento CSS',
    },
    {
      src:'assets/icons/javascript.svg',
      alt: 'ícones de conhecimento Javascript',
    },
    {
      src:'assets/icons/angular.svg',
      alt: 'ícones de conhecimento Angular',
    },
    {
      src:'assets/icons/csharp.svg',
      alt: 'ícones de conhecimento C#',
    },
    {
      src:'assets/icons/python.svg',
      alt: 'ícones de conhecimento Python',
    },
    {
      src:'assets/icons/postgresql.svg',
      alt: 'ícones de conhecimento PostgreSQL',
    },
    {
      src:'assets/icons/figma.svg',
      alt: 'ícones de conhecimento Figma',
    },
    {
      src:'assets/icons/canva.svg',
      alt: 'ícones de conhecimento Canva',
    },    
  ]);
}
