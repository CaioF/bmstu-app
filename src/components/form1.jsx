import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "diplom",
      name_s: "",
      student: "",
      group: "",
      faculty: "",
      grade: "",
      professor: "",
      faculty_p: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value, event: event });
  }

  handleClick(event) {
    fetch('http://172.19.234.162:8008/api/from-form', { //IPv4
      body: JSON.stringify(this.state),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
      .then(function (response) {
        if (response.status === 200) {
          window.location='http://172.19.234.162:8008/'; //IPv4
        } else {
          alert('Ошибка сервера!\nПроверьте что все поля заполнены правильно');
          alert(`${JSON.stringify(response.body)}`);
        }
        // return response.json();
      });

  }

  render() {
      return (
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form name ="myForm" className="contact100-form">
            <span className="contact100-form-title">
              Оформление титульного листа для дипломной работы
            </span>
            <div className="wrap-input100">
              <span className="label-input100">Название работы</span>
              <input className="input100" type="text" name="name_s" value={this.state.name_s} onChange={(event)=>this.handleInputChange(event)} placeholder="Анализ видов котов: лапы и уши" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Ваше имя</span>
              <input className="input100" type="text" name="student" value={this.state.student} onChange={(event)=>this.handleInputChange(event)} placeholder="Фамилия И. О." />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Ваша группа</span>
              <input className="input100" type="text" name="group" value={this.state.group} onChange={(event)=>this.handleInputChange(event)} placeholder="ФСБ-11А" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Ваш факультет</span>
              <input className="input100" type="text" name="faculty" value={this.state.faculty} onChange={(event)=>this.handleInputChange(event)} placeholder="Факультет учения о котах" />
            </div>
            <div className="wrap-input100 rs1-wrap-input100">
            <span className="label-input100">Ваш курс</span>
              <div>
                <select name="lang" value={this.state.value} onChange={(event)=>this.handleInputChange(event)}>
                  <option>Выберите одно</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Имя вашего руководителя</span>
              <input className="input100" type="text" name="professor" value={this.state.faculty} onChange={(event)=>this.handleInputChange(event)} placeholder="Фамилия И. О." />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Кафедра вашего руководителя</span>
              <input className="input100" type="text" name="faculty_p" value={this.state.faculty} onChange={(event)=>this.handleInputChange(event)} placeholder="ФСБ" />
            </div>
            <div className="container-contact100-form-btn">
              <button type="button" className="contact100-form-btn" onClick={(event)=>this.handleClick(event)}>
                <span>
                  Оформить!
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
