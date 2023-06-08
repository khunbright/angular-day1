import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

interface Member{
  name:string;
  email:string;
  age:number;
  tel:string;
  gender:string
}

@Component({
  selector: 'app-workshop5',
  templateUrl: './workshop5.component.html',
  styleUrls: ['./workshop5.component.css']
})
export class Workshop5Component {

  memberlist: Array<Member> = [] 
  formMember!:FormGroup

  ngOnInit(): void {
    this.formMember = new FormGroup({
      name: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required, Validators.email]),
      tel: new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      age: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required)

    })
  } 
  submit(){
    console.log(this.formMember)
     if(this.formMember.get('name')?.invalid) {
      alert('name invalid')
    }else if (this.formMember.get('email')?.invalid){
      alert('email invalid')
    }else if (this.formMember.get('tel')?.invalid){
      alert('tel invalid')
    }else if (this.formMember.get('age')?.invalid){
      alert('age invalid')
    }else if (this.formMember.get('gender')?.invalid){
      alert('gender invalid')
    }else{
      this.memberlist.push(this.formMember.value)
    }
  //   console.log(this.formMember)
  }


}
