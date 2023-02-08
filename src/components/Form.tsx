import React, { ChangeEvent, Component} from 'react'
import "firebase/database";
import Title from '../Props/titleProbs';
import service from '../Hooks/firestoreService'

type Probs = {};

type State = Title & {
  submitted: boolean;
  firstName: string,
  lastName: string,
  addStudent: boolean,
  firstName2: string,
  lastName2: string,
  fName: string,
  LName: string,
  addAdvisor: boolean
  fName2: string,
  LName2: string,
}

class Form extends Component<Probs, State> {

 constructor(probs: Probs) {
  super(probs);
  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleAdvisorLastName2OnChange = this.handleAdvisorLastName2OnChange.bind(this);
  this.handleAdvisorLastNameOnChange = this.handleAdvisorLastNameOnChange.bind(this);
  this.handleAdvisorName2OnChange = this.handleAdvisorName2OnChange.bind(this);
  this.handleAdvisorNameOnChange = this.handleAdvisorNameOnChange.bind(this);
  this.handleDegreeOnChange = this.handleDegreeOnChange.bind(this);
  this.handleStudentLastName2OnChange = this.handleStudentLastName2OnChange.bind(this);
  this.handleStudentLastNameOnChange = this.handleStudentLastNameOnChange.bind(this);
  this.handleStudentName2OnChange = this.handleStudentName2OnChange.bind(this);
  this.handleStudentNameOnChange = this.handleStudentNameOnChange.bind(this)
  this.saveTitle = this.saveTitle.bind(this);
  this.newTitle = this.newTitle.bind(this);
  this.newStudent = this.newStudent.bind(this);
  this.newAdvisor = this.newAdvisor.bind(this);

  this.state = {
    id: '',
    title: '',
    degree: '',
    studentName: [],
    advisorName: [],
    submitted: false,
    firstName: '', 
    lastName: '',
    addStudent: true,
    firstName2: '', 
    lastName2: '',
    fName: '',
    LName: '',
    addAdvisor: true,
    fName2: '',
    LName2: '',
  }
 }

  handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value
    })
  }

  handleDegreeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      degree: event.target.value
    })
  }

  handleStudentNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleStudentLastNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleAdvisorNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      fName: event.target.value
    })
  }

  handleAdvisorLastNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      LName: event.target.value
    })
  }

  handleStudentName2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstName2: event.target.value
    })
  }

  handleStudentLastName2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      lastName2: event.target.value
    })
  }

  handleAdvisorName2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      fName2: event.target.value
    })
  }

  handleAdvisorLastName2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      LName2: event.target.value
    })
  }

  saveTitle () {
    let student = [
      {
        name: this.state.firstName,
        lastname: this.state.lastName
      },
      {
        name: this.state.firstName2,
        lastname: this.state.lastName2
      },
    ]

    let advisor = [
      {
        name: this.state.fName,
        lastname: this.state.LName
      },
      {
        name: this.state.fName2,
        lastname: this.state.LName2
      },
    ]

    let data = {
      id: this.state.id,
      title: this.state.title,
      degree: this.state.degree,
      studentName: student,
      advisorName: advisor
    };

    service.create(data, "1").then(() => {
      this.setState({
        submitted: true
      });
    }).catch((e: Error)=> {
      console.log(e);
    })
  }

  newStudent () {
    this.setState({
      addStudent: false
    })
  }

  newAdvisor () {
    this.setState({
      addAdvisor: false
    })
  }

  newTitle() {
    this.setState({
      title: '',
      degree: '',
      studentName: [],
      advisorName: [],
      submitted: false,
      firstName: '', 
      lastName: '',
      firstName2: '', 
      lastName2: '',
      addStudent: true,
      fName: '',
      LName: '',
      fName2: '',
      LName2: '',
      addAdvisor: true
    })
  }

/* Content */
  render () {
    return (
      <>
      <div className='submit-form'>
        {this.state.submitted ? (
          <div>
            <button className='btn btn-success' onClick={this.newTitle}>Add</button>
          </div>
        ):(
          <div>
            <h3>ปัญหาพิเศษ</h3>
            <div className='form-group'>
              <label htmlFor='title'>ชื่อปัญหาพิเศษ</label>
              <input 
              type="text"
              className='form-control'
              id='title'
              required
              value={this.state.title}
              onChange={this.handleOnChange}
              name="title"
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='title'>ลำดับ</label>
              <input 
              type="text"
              className='form-control'
              id='title'
              required
              value={this.state.degree}
              onChange={this.handleDegreeOnChange}
              name="title"
              ></input>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อนักศึกษา</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.firstName}
                  onChange={this.handleStudentNameOnChange}
                  name="title"
                  ></input>
                </div>
                <div className='col-sm'>
                  <div className='form-group'>
                    <label htmlFor='title'>นามสกุล</label>
                    <input 
                    type="text"
                    className='form-control'
                    id='title'
                    required
                    value={this.state.lastName}
                    onChange={this.handleStudentLastNameOnChange}
                    name="title"
                    ></input>
                  </div>
                </div>  
              </div>
            </div>
            <div>
              {this.state.addStudent ? (
                <div>
                  <button className='btn btn-success' onClick={this.newStudent}>Add</button>
                </div>
              ):(
            <>
            <div className='row'>
              <div className='col-sm'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อนักศึกษา 2</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.firstName2}
                  onChange={this.handleStudentName2OnChange}
                  name="title"
                  ></input>
                </div>
                <div className='col-sm'>
                  <div className='form-group'>
                    <label htmlFor='title'>นามสกุล 2</label>
                    <input 
                    type="text"
                    className='form-control'
                    id='title'
                    required
                    value={this.state.lastName2}
                    onChange={this.handleStudentLastName2OnChange}
                    name="title"
                    ></input>
                  </div>
                </div>  
              </div>
            </div>
                </>
          )}
          </div>
            <div className='row'>
              <div className='col-sm'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อที่ปรึกษา</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.fName}
                  onChange={this.handleAdvisorNameOnChange}
                  name="title"
                  ></input>
                </div>
                <div className='col-sm'>
                  <div className='form-group'>
                    <label htmlFor='title'>นามสกุล</label>
                    <input 
                    type="text"
                    className='form-control'
                    id='title'
                    required
                    value={this.state.LName}
                    onChange={this.handleAdvisorLastNameOnChange}
                    name="title"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div>
                {this.state.addAdvisor ? (
                  <div>
                    <button className='btn btn-success' onClick={this.newAdvisor}>Add</button>
                  </div>
                ):(
                <>
            <div className='row'>
              <div className='form-inline'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อที่ปรึกษา 2</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.fName2}
                  onChange={this.handleAdvisorName2OnChange}
                  name="title"
                  ></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>นามสกุล 2</label>
                    <input 
                    type="text"
                    className='form-control'
                    id='title'
                    required
                    value={this.state.LName2}
                    onChange={this.handleAdvisorLastName2OnChange}
                    name="title"
                    ></input>
                  </div> 
              </div>
            </div>
            </>
          )}
          </div>
            <button onClick={this.saveTitle} className='btn btn-success'> Submit </button>
          </div>
        )}
      </div>
      </>
    )
  }
  

}



export default Form