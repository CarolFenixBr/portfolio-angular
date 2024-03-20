import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/Experiences.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
public arrayExperiences = signal<IExperiences[]>([
    {
      sumary: {
        b:'Estágio em TI',
        p:'InvestSmart XP | Set 2023 - Presente',
      },
      text:'<p>Desenvolvimento Web front-end e back-end(Full stack) com HTML, CSS, Javascript e PHP; Bitrix24; Design UX/UI utilizando ferramentas como Figma, Canva e Adobe Express; Layout de e-mails; Gestão de projetos com metodologia scrum, Kanban, e com daily e apresentação; Automações de sistemas; Tally formulários; Suporte ao sistema Bitrix24(Digisac).</p>',
    },
      {
        sumary: {
          b:'Chefe de Setor',
          p:'Prefeitura Municipal de São Gonçalo | Set 2023 - Presente',
        },
        text:'<p>Administração organizacional do departamento, incluindo a gestão, atendimento, recepção, computação, e estoque.</p>',
      },
  ])
}
