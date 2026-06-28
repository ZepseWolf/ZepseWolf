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
  isFilterOpen: boolean = false;
  programmingExperience: number = new Date().getFullYear() - 2016;

  allProject = {
    industryProject: [
      {
        title: "Student's Medical E-Document Evaluation Platform",
        yearCompleted: "2023",
        imgSrc: "assets/img/edoc.png",
        type: ["Development"],
        toolUsed: ["Angular", "Flask"],
        path: "/edoc"
      },
      {
        title: "Wire-Bond Capacitance Testing Interface",
        yearCompleted: "2021",
        imgSrc: "assets/img/xvtep.png",
        type: ["Development"],
        toolUsed: ["Angular", "Electron", "JIRA", "Bitbucket", "Slack"],
        path: "/vtep"
      },
      {
        title: "Matching Server with IBM Watson",
        yearCompleted: "2018",
        imgSrc: "assets/img/matching.png",
        type: ["Development"],
        toolUsed: ["NodeJS", "Express", "Mongodb", "IBM Watson"],
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
        path: "/airstrike"
      },
      {
        title: "Competitive Digimon Dex",
        yearCompleted: "2023",
        imgSrc: "assets/img/digimon.png",
        type: ["Development"],
        toolUsed: ["Flask", "Mongodb", "SQL"],
        path: "/digimon"
      },
      {
        title: "TTSH Mobile Scope Management System",
        yearCompleted: "2023",
        imgSrc: "assets/img/scopemobile.png",
        type: ["Development"],
        toolUsed: ["Kotlin", "Firebase"],
        path: "/scopemobile"
      },
      {
        title: "Lora & BLE Mesh for Outdoor Tracking",
        yearCompleted: "2023",
        imgSrc: "assets/img/lorable.png",
        type: ["Development"],
        toolUsed: ["Kotlin", "Firebase"],
        path: "/lorable"
      },
      {
        title: "Smart City Server",
        yearCompleted: "2023",
        imgSrc: "assets/img/smartcity.png",
        type: ["Development", "Analysis"],
        toolUsed: ["Express", "Mongodb", "SocketIO", "Flutter", "Apache", "NGINX"],
        path: "/smartcity"
      },
      {
        title: "TTSH Website Scope Management System",
        yearCompleted: "2022",
        imgSrc: "assets/img/scopeweb.png",
        type: ["Development"],
        toolUsed: ["Angular", "Firebase"],
        path: "/scopeweb"
      },
      {
        title: "Steganograph Application",
        yearCompleted: "2022",
        imgSrc: "assets/img/stegano.png",
        type: ["Development"],
        toolUsed: ["Eel", "Python"],
        path: "/stegano"
      },
      {
        title: "Naive Bayes Classification",
        yearCompleted: "2021",
        imgSrc: "assets/img/naivebayes.png",
        type: ["Analysis"],
        toolUsed: ["C"],
        path: "/naivebayes"
      },
      {
        title: "Negative Text Convolutional Neural Network Classification",
        yearCompleted: "2019",
        imgSrc: "assets/img/negativecnn.png",
        type: ["Development", "Analysis"],
        toolUsed: ["UIpath", "Python", "TensorFlow"],
        path: "/negativecnn"
      },
      {
        title: "Singapore Economy Analysis",
        yearCompleted: "2017",
        imgSrc: "assets/img/singaporeeco.png",
        type: ["Analysis"],
        toolUsed: ["Tableau", "VBScript"],
        path: "/singaporeeco"
      },
      {
        title: "SnapNYP Dashboard - First Website",
        yearCompleted: "2016",
        imgSrc: "assets/img/singaporeeco.png",
        type: ["Development"],
        toolUsed: ["HTML", "CSS", "Javascript"],
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
    this._lifeCycleService.completedLifeCycle.subscribe(() => {
      this.showSlides(this.slideIndex);
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
    this.allProjectView = this.allProject;
  }

  public clearAll(): void {
    this.selectedTools = [];
    this.applyFilter();
  }

  public get isFiltered(): boolean {
    return this.selectedTools.length !== this.allTools.length;
  }

  public getToolImagePath(tool: string): string {
    return 'assets/img/' + tool.toLowerCase().replace(/\s+/g, '') + '.png';
  }

  private applyFilter(): void {
    const filterProjects = (projects: any[]) =>
      projects.filter(project =>
        project.toolUsed.some((tool: string) => this.selectedTools.includes(tool))
      );

    this.allProjectView = {
      industryProject: filterProjects(this.allProject.industryProject),
      selfProject: filterProjects(this.allProject.selfProject),
      schoolProject: filterProjects(this.allProject.schoolProject),
    };
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
