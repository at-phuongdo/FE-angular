import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
  
})

export class FormComponent{

  teams: Array<any>;
  selectedTeam = "";
  memberForm: any;
  prerequisite: any;
  list: Array<any>;

  constructor(private  formBuilder: FormBuilder) {
    this.list = [];
    this.teams = ["Ruby", "FE", "PHP"];
    this.memberForm = this.formBuilder.group({
      personal: new FormGroup({
        avatar: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        birthday: new FormControl('')
      }),
      company: new FormGroup({
        joined: new FormControl(''),
        selectedTeam: new FormControl('', [Validators.required])
      }),
      skill: new FormControl('')
    });
  }

  ngOnInit() {
    this.memberForm.controls.company.controls.selectedTeam.valueChanges.subscribe(
      (val: string) => {
        if (val === "PHP") {
          this.prerequisite = "PHP";
        }
        else if (val === "FE") {
          this.prerequisite = "HTML";
        }
        else if (val === "Ruby") {
          this.prerequisite = "Ruby";
        }
        this.memberForm.setControl('skill',new FormControl('',[Validators.required, this.checkSkillByTeam]));
      });
  }

  checkSkillByTeam = (input: FormControl) => {
    let index: boolean;
    if (input.value.indexOf(this.prerequisite) == -1){
      index = false;
    }
    else{
      index = true;
    }
    return index ? null : {skillInvalid: true};
  }

  add(member: any) {
    this.list.push(member.value);
    console.log(member.value);
  }

  edit(member: any) {
    (<FormGroup>this.memberForm).setValue(member, { onlySelf: true });
  }
   delete = (indexMember: number) :void => {
    this.list.splice(indexMember , 1);
  }

  // changeSkill() {
    //   let team= this.memberForm.get('company').get('selectedTeam').value;
    //   if (team == "Ruby")
    //     this.memberForm.controls['skill'].setValue("Ruby+");
    //   else if(team == "FE")
    //     this.memberForm.controls['skill'].setValue("FE+");
    //   else if (team =="PHP")
    //     this.memberForm.controls['skill'].setValue("PHP+");
    // }

    //   onChange(team: any){
      //    if(team == "Ruby") {
        //      this.skill = "Ruby+ ";
        //    }
        //    else if(team == "FE") {
          //      this.skill = "FE+ ";
          //    }
          //    else if(team == "PHP") {
            //      this.skill = "PHP+ ";
            //    }
            //   }
}
