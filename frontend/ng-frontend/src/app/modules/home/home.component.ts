import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

// Services
import { LifeCycleService } from 'src/app/services/life-cycle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('svgTablet') svgTablet!: ElementRef;
  @ViewChild('svgSnake') svgSnake!: ElementRef;

  allTools: string[] = [];
  selectedTools: string[] = [];
  selectedRole: string = 'all';
  isFilterOpen: boolean = false;
  showRoleModal: boolean = false;
  private modalShown: boolean = false;

  private readonly LS_ROLE = 'portfolio_role';
  private readonly LS_TOOLS = 'portfolio_tools';
  private readonly LS_MODAL_ANSWERED = 'portfolio_modal_answered';
  programmingExperience: number = new Date().getFullYear() - 2016;

  allProject = {
    industryProject: [
      {
        title: "Asset Management for Keppel",
        yearCompleted: "2026",
        imgSrc: "assets/img/keppel.svg",
        type: ["Development", "Analysis"],
        toolUsed: [],
        roles: ["Full Stack", "Data Scientist"],
        path: "/keppel"
      },
      {
        title: "Student's Medical E-Document Evaluation Platform",
        yearCompleted: "2023",
        imgSrc: "assets/img/edoc.png",
        type: ["Development"],
        toolUsed: ["Angular", "Flask"],
        roles: ["Full Stack"],
        path: "/edoc"
      },
      {
        title: "Wire-Bond Capacitance Testing Interface",
        yearCompleted: "2021",
        imgSrc: "assets/img/xvtep.png",
        type: ["Development"],
        toolUsed: ["Angular", "Electron", "JIRA", "Bitbucket", "Slack"],
        roles: ["Full Stack"],
        path: "/vtep"
      },
      {
        title: "Matching Server with IBM Watson",
        yearCompleted: "2018",
        imgSrc: "assets/img/matching.png",
        type: ["Development"],
        toolUsed: ["NodeJS", "Express", "Mongodb", "IBM Watson"],
        roles: ["Full Stack", "Data Scientist"],
        path: "/matching"
      }
    ],
    selfProject: [
      {
        title: "Portfolio Website",
        yearCompleted: "2023",
        imgSrc: "assets/img/portfolio.png",
        type: ["Development"],
        toolUsed: ["Angular"],
        roles: ["Full Stack"],
        path: "/home"
      }
    ],
    schoolProject: [
      {
        title: "Airstrike - Detect Malicious Website with CNN & BiLSTM",
        yearCompleted: "2024",
        imgSrc: "assets/img/Capstone_Poster.png",
        type: ["Development", "Analysis"],
        toolUsed: ["Angular", "Flask", "Javascript", "Esprima", "Fasttext", "Tensorflow"],
        roles: ["Full Stack", "Data Scientist"],
        path: "/airstrike"
      },
      {
        title: "Competitive Digimon Dex",
        yearCompleted: "2023",
        imgSrc: "assets/img/digimon.png",
        type: ["Development"],
        toolUsed: ["Flask", "Mongodb", "SQL"],
        roles: ["Full Stack"],
        path: "/digimon"
      },
      {
        title: "TTSH Mobile Scope Management System",
        yearCompleted: "2023",
        imgSrc: "assets/img/scopemobile.png",
        type: ["Development"],
        toolUsed: ["Kotlin", "Firebase"],
        roles: ["Full Stack"],
        path: "/scopemobile"
      },
      {
        title: "Lora & BLE Mesh for Outdoor Tracking",
        yearCompleted: "2023",
        imgSrc: "assets/img/lorable.png",
        type: ["Development"],
        toolUsed: ["Kotlin", "Firebase"],
        roles: ["Full Stack"],
        path: "/lorable"
      },
      {
        title: "Smart City Server",
        yearCompleted: "2023",
        imgSrc: "assets/img/smartcity.png",
        type: ["Development", "Analysis"],
        toolUsed: ["Express", "Mongodb", "SocketIO", "Flutter", "Apache", "NGINX"],
        roles: ["Full Stack"],
        path: "/smartcity"
      },
      {
        title: "TTSH Website Scope Management System",
        yearCompleted: "2022",
        imgSrc: "assets/img/scopeweb.png",
        type: ["Development"],
        toolUsed: ["Angular", "Firebase"],
        roles: ["Full Stack"],
        path: "/scopeweb"
      },
      {
        title: "Steganograph Application",
        yearCompleted: "2022",
        imgSrc: "assets/img/stegano.png",
        type: ["Development"],
        toolUsed: ["Eel", "Python"],
        roles: ["Full Stack"],
        path: "/stegano"
      },
      {
        title: "Naive Bayes Classification",
        yearCompleted: "2021",
        imgSrc: "assets/img/naivebayes.png",
        type: ["Analysis"],
        toolUsed: ["C"],
        roles: ["Data Scientist"],
        path: "/naivebayes"
      },
      {
        title: "Negative Text Convolutional Neural Network Classification",
        yearCompleted: "2019",
        imgSrc: "assets/img/negativecnn.png",
        type: [ "Analysis"],
        toolUsed: ["UIpath", "Python", "TensorFlow"],
        roles: [ "Data Scientist"],
        path: "/negativecnn"
      },
      {
        title: "Singapore Economy Analysis",
        yearCompleted: "2017",
        imgSrc: "assets/img/singaporeeco.png",
        type: ["Analysis"],
        toolUsed: ["Tableau", "VBScript"],
        roles: ["Data Scientist"],
        path: "/singaporeeco"
      },
      {
        title: "SnapNYP Dashboard - First Website",
        yearCompleted: "2016",
        imgSrc: "assets/img/snapnyp.png",
        type: ["Development"],
        toolUsed: ["HTML", "CSS", "Javascript"],
        roles: ["Full Stack"],
        path: "/snapnyp"
      }
    ]
  };

  allProjectView: any;
  slideIndex: number = 1;
  slideTimer: any;

  constructor(private _lifeCycleService: LifeCycleService) {}

  ngOnInit(): void {
    this.allProjectView = this.allProject;
    this.getAllPossibleTool();
    this.loadSavedFilters();
    this.applyFilter();
    this._lifeCycleService.completedLifeCycle.subscribe(() => {
      this.showSlides(this.slideIndex);
      if (!this.modalShown) {
        this.showRoleModal = !localStorage.getItem(this.LS_MODAL_ANSWERED);
        this.modalShown = true;
      }
    });
    this.createSlideTimer();
  }

  ngAfterViewInit(): void {
    this._lifeCycleService.initCheck();
  }

  ngOnDestroy(): void {
    this.closeSlideTimer();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.isFilterOpen = false;
  }

  public showFilter(event: Event): void {
    event.stopPropagation();
    this.isFilterOpen = !this.isFilterOpen;
  }

  public stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  public onItemChecked(event: any, tool: string): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (!this.selectedTools.includes(tool)) {
        this.selectedTools.push(tool);
      }
    } else {
      this.selectedTools = this.selectedTools.filter(t => t !== tool);
    }
    this.applyFilter();
  }

  public selectAll(): void {
    this.selectedTools = [...this.allTools];
    this.applyFilter();
  }

  public clearAll(): void {
    this.selectedTools = [];
    this.applyFilter();
  }

  public get isFiltered(): boolean {
    return this.selectedTools.length !== this.allTools.length;
  }

  public setRole(role: string): void {
    this.selectedRole = role;
    this.applyFilter();
  }

  public selectModalRole(role: string): void {
    localStorage.setItem(this.LS_MODAL_ANSWERED, 'true');
    this.setRole(role);
    this.showRoleModal = false;
  }

  public scrollToTop(): void {
    const el = document.querySelector('.home-main') as HTMLElement;
    if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public getToolImagePath(tool: string): string {
    return 'assets/img/' + tool.toLowerCase().replace(/\s+/g, '') + '.png';
  }

  private loadSavedFilters(): void {
    const savedRole = localStorage.getItem(this.LS_ROLE);
    const savedTools = localStorage.getItem(this.LS_TOOLS);
    if (savedRole) {
      this.selectedRole = savedRole;
    }
    if (savedTools) {
      try {
        const parsed: string[] = JSON.parse(savedTools);
        this.selectedTools = parsed.filter(t => this.allTools.includes(t));
      } catch {}
    }
  }

  private saveFilters(): void {
    localStorage.setItem(this.LS_ROLE, this.selectedRole);
    localStorage.setItem(this.LS_TOOLS, JSON.stringify(this.selectedTools));
  }

  private applyFilter(): void {
    const filterByTool = (projects: any[]) =>
      projects.filter(project =>
        project.toolUsed.length === 0 ||
        project.toolUsed.some((tool: string) => this.selectedTools.includes(tool))
      );

    const filterByRole = (projects: any[]) => {
      if (this.selectedRole === 'all') return projects;
      if (this.selectedRole === 'data-scientist') return projects.filter(p => p.roles.includes('Data Scientist'));
      if (this.selectedRole === 'full-stack') return projects.filter(p => p.roles.includes('Full Stack'));
      return projects;
    };

    const filter = (projects: any[]) => filterByRole(filterByTool(projects));

    this.allProjectView = {
      industryProject: filter(this.allProject.industryProject),
      selfProject: filter(this.allProject.selfProject),
      schoolProject: filter(this.allProject.schoolProject),
    };
    this.saveFilters();
  }

  private getAllPossibleTool(): void {
    const addTools = (projects: any[]) => {
      projects.forEach(project => {
        project.toolUsed.forEach((tool: string) => {
          if (!this.allTools.includes(tool)) {
            this.allTools.push(tool);
            this.selectedTools.push(tool);
          }
        });
      });
    };

    addTools(this.allProject.selfProject);
    addTools(this.allProject.industryProject);
    addTools(this.allProject.schoolProject);
  }

  private createSlideTimer(): void {
    this.slideTimer = setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  }

  private closeSlideTimer(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    }
  }

  private resetSlideTimer(): void {
    this.closeSlideTimer();
    this.createSlideTimer();
  }

  public currentSlide(n: number): void {
    this.showSlides((this.slideIndex = n));
    this.resetSlideTimer();
  }

  public plusSlides(n: number): void {
    this.showSlides((this.slideIndex += n));
    this.resetSlideTimer();
  }

  private showSlides(n: number): void {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    Array.from(slides).forEach(slide => {
      (slide as HTMLElement).style.display = 'none';
    });

    Array.from(dots).forEach(dot => {
      dot.className = dot.className.replace(' active', '');
    });

    (slides[this.slideIndex - 1] as HTMLElement).style.display = 'flex';
    dots[this.slideIndex - 1].className += ' active';
  }
}
