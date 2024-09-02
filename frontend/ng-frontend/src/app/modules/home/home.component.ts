import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit } from '@angular/core';

// Services
import { LifeCycleService } from 'src/app/services/life-cycle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,AfterViewInit {
  @ViewChild('svgTablet') svgTablet!: ElementRef;
  @ViewChild('svgSnake') svgSnake!: ElementRef;

  constructor(
    private _lifeCycleService: LifeCycleService
  ){ }

  allTools:any =[];
  selectedTools:any =[];
  allProject:any ={
    industryProject : [
      {
        title: "Medical E-Document Ready Interface",
        yearCompleted : "2023",
        imgSrc: "assets/img/edoc.png",
        type: ["Development"],
        toolUsed: [
          "Angular", "Flask"
        ]
      },
      {
        title: "Wire-Bond Capacitance Testing Interface",
        yearCompleted : "2021",
        imgSrc: "assets/img/xvtep.png",
        type: ["Development"],
        toolUsed: [
          "Angular", "Electron" , "JIRA" , "Bitbucket", "Slack"
        ]
      },
      {
        title: "Matching Server with IBM Watson",
        yearCompleted : "2018",
        imgSrc: "assets/img/matching.png",
        type: ["Development"],
        toolUsed: [
          "NodeJS", "Express" , "Mongodb" , "IBM Watson"
        ]
      } 
    ],
    selfProject: [
      {
        title: "Potfolio Website",
        yearCompleted : "2023",
        imgSrc: "assets/img/edoc.png",
        type: ["Development"],
        toolUsed: [
          "Angular"
        ]
      }
    ],
    schoolProject: [
      {
        title: "Competitive Digimon Dex",
        yearCompleted : "2023",
        imgSrc: "assets/img/digimon.png",
        type: ["Development"],
        toolUsed: [
          "Flask" , "Mongodb" , "SQL"
        ]
      },
      {
        title: "TTSH Mobile Scope Management System",
        yearCompleted : "2023",
        imgSrc: "assets/img/scopemobile.png",
        type: ["Development"],
        toolUsed: [
          "Kotlin","Firebase"
        ]
      },
      {
        title: "Lora & BLE Mesh for Outdoor tracking",
        yearCompleted : "2023",
        imgSrc: "assets/img/lorable.png",
        type: ["Development"],
        toolUsed: [
          "Kotlin","Firebase"
        ]
      },
      {
        title: "Smart City Server",
        yearCompleted : "2023",
        imgSrc: "assets/img/smartcity.png",
        type: ["Development", "Analysis"],
        toolUsed: [
          "Express","Mongodb", "SocketIO" , "Flutter" , "Apache" , "NGINX"
        ]
      },
      {
        title: "TTSH Website Scope Management System",
        yearCompleted : "2022",
        imgSrc: "assets/img/scopeweb.png",
        type: ["Development"],
        toolUsed: [
          "Angular","Firebase"
        ]
      },
      {
        title: "Steganograph Application",
        yearCompleted : "2022",
        imgSrc: "assets/img/stegano.png",
        type: ["Development"],
        toolUsed: [
          "Eel","Python"
        ]
      },
      {
        title: "Naive Bayes Classification",
        yearCompleted : "2021",
        imgSrc: "assets/img/naivebayes.png",
        type: ["Analysis"],
        toolUsed: [
          "C"
        ]
      },
      {
        title: "Negative Text Convonlutional Neural Network Classifcation",
        yearCompleted : "2019",
        imgSrc: "assets/img/negativecnn.png",
        type: ["Development" ,"Analysis"],
        toolUsed: [
          "UIpath" , "Python" , "TensorFlow"
        ]
      },
      {
        title: "Singapore Economy Analysis",
        yearCompleted : "2017",
        imgSrc: "assets/img/singaporeeco.png",
        type: ["Analysis"],
        toolUsed: [
          "Tableau" , "VBScript"
        ]
      }
      ,
      {
        title: "SnapNYP Dashboard - First Website",
        yearCompleted : "2016",
        imgSrc: "assets/img/singaporeeco.png",
        type: ["Development"],
        toolUsed: [
          "HTML" , "CSS" , "Javascript"
        ]
      }
    ]
  };

  allProjectView:any;

  slideIndex: number = 1;

  ngAfterViewInit(): void {
    this._lifeCycleService.initCheck();
  }

  ngOnInit(): void {
    var self = this;
    this.allProjectView = this.allProject;
    this.getAllPossibleTool();
    self._lifeCycleService.completedLifeCycle.subscribe((cb)=>{
      // if(cb){
      
      // }
      this.showSlides(this.slideIndex);
    });
    setInterval(()=>{
      this.plusSlides(1)
    },5000)
  }

  public startNow(): void{
    console.log("starting now")
  }

  private doAnimation(): void{
    // THIS IS:// For moving image
    var notebook = document.getElementById("brand-notebook");
    var items = document.getElementById("brand-camera");

    // THIS IS:// For animated logo
    var brand = document.getElementById('brandname');
    var paths= brand!.children as HTMLCollectionOf<HTMLElement>; 
    notebook!.style.animation = ' notebook 1s ease forwards';
    items!.style.animation = ' items 1s ease forwards';
    brand!.style.animation = ' brand-fill 1s ease forwards 3.5s';
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.animation = `brand-animation 2s ease forwards ${Math.round(0.6+(i*0.3)*10)/10}s`;  
    }
  };

  public showFilter(event:any):void{
    console.log(event.target.parentNode.children[1]);
    event.target.parentNode.children[1].classList.toggle("show");
  }

  private getAllPossibleTool(){
    
    this.allProject.selfProject.forEach((element:any) => {
      element.toolUsed.forEach((tool:string) => {
        if(this.allTools.indexOf(tool) === -1) {
          this.allTools.push(tool);
          this.selectedTools.push(tool);
        }
      });
    });
    this.allProject.industryProject.forEach((element:any) => {
      element.toolUsed.forEach((tool:string) => {
        if(this.allTools.indexOf(tool) === -1) {
          this.allTools.push(tool);
          this.selectedTools.push(tool);
        }
      });
      
    });
    this.allProject.schoolProject.forEach((element:any) => {
      element.toolUsed.forEach((tool:string) => {
        if(this.allTools.indexOf(tool) === -1) {
          this.allTools.push(tool);
          this.selectedTools.push(tool);
        }
      });
    });

  }

  public onItemChecked(event:any,tool: string){
    const isChecked = event.target.checked;
    
    if (isChecked) {
      if(this.selectedTools.indexOf(tool) === -1) {
        this.selectedTools.push(tool);
      }
    } else {
      var index = this.selectedTools.indexOf(tool);
      this.selectedTools.splice(index, 1);
      console.log('Checkbox is unchecked.');
    }
    console.log(this.selectedTools);
  }

  public generateProject(){
    var arrOfProjectType = Object.keys(this.allProjectView);
    for(var i=0 ; i < arrOfProjectType.length; i++){
      for(var ii=0 ; ii < this.allProjectView[arrOfProjectType[i]].length; ii++){
        this.allProjectView[arrOfProjectType[i]][ii]
      }
    }
    
  }

  public currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  public plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  private showSlides(n: number): void {
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
    
    if (n > slides.length) { 
      this.slideIndex = 1; 
    }
    if (n < 1) { 
      this.slideIndex = slides.length; 
    }
    
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    (slides[this.slideIndex - 1] as HTMLElement).style.display = "flex";
    dots[this.slideIndex - 1].className += " active";
  }
}
