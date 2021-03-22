import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    this.port = process.env.PORT || 8008;
    super(props);

    this.state = {
      type: "referat",
      name_s: "",
      student: "",
      group: "",
      faculty: "",
      professor: "",
      faculty_p: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, event });
  }

  handleClick(event) {
    if (JSON.stringify(this.state.name_s).replace(/"/g,"").lenght > 150) { alert('Количество знаков названия реферата не должен превышать 150!'); }
    else if (JSON.stringify(this.state.student).replace(/"/g,"").lenght > 50) { alert('Количество знаков имена студента не должен превышать 50!'); }
    else if (JSON.stringify(this.state.group).replace(/"/g,"").lenght > 10) { alert('Количество знаков группы студента не должен превышать 10!'); }
    else if (JSON.stringify(this.state.faculty).replace(/"/g,"").lenght > 75) { alert('Количество знаков названия факультета/кафедры не должен превышать 75!'); }
    else if (JSON.stringify(this.state.professor).replace(/"/g,"").lenght > 50) { alert('Количество знаков имена руководителя не должен превышать 50!'); }
    else if (JSON.stringify(this.state.faculty_p).replace(/"/g,"").lenght > 75) { alert('Количество знаков названия факультета/кафедры не должен превышать 75!'); }
    else if (JSON.stringify(this.state.name_s).replace(/"/g,"") === "") { alert('Поле "Название реферата" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.student).replace(/"/g,"") === "") { alert('Поле "Ваше имя" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.group).replace(/"/g,"") === "") { alert('Поле "Ваша группа" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.faculty).replace(/"/g,"") === "") { alert('Поле "Ваша кафедра" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.professor).replace(/"/g,"") === "") { alert('Поле "Имя вашего руководителя" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.faculty_p).replace(/"/g,"") === "") { alert('Поле "Кафедра вашего руководителя" не должно быть пустым!'); }
    else 
    {
      fetch(`${this.server_host}${this.port}/api/pdf`, { //IPv4
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
          window.setTimeout(window.location=`${this.server_host}${this.port}/api/pdf`, 60); //IPv4
        } else {
          alert('Ошибка сервера!\nПроверьте что все поля заполнены правильно');
          console.log(`${JSON.stringify(response)}`);
        }
      });
    }
  }

  render() {
      return (
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form name ="myForm" className="contact100-form">
            <span className="contact100-form-title">
              Оформление титульного листа для реферата
            </span>
            <div className="wrap-input100">
              <span className="label-input100">Название реферата</span>
              <input className="input100" type="text" name="name_s" value={this.state.name_s} onChange={(event)=>this.handleInputChange(event)} placeholder="Научный анализ котов" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Ваше имя</span>
              <input className="input100" type="text" name="student" value={this.state.student} onChange={(event)=>this.handleInputChange(event)} placeholder="Фамилия И. О." />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Ваша группа</span>
              <input className="input100" type="text" name="group" value={this.state.group} onChange={(event)=>this.handleInputChange(event)} placeholder="CГН3-99А" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Ваша кафедра</span>
              <input className="input100" type="text" name="faculty" value={this.state.faculty} onChange={(event)=>this.handleInputChange(event)} placeholder="СГН3" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Имя вашего руководителя</span>
              <input className="input100" type="text" name="professor" value={this.state.professor} onChange={(event)=>this.handleInputChange(event)} placeholder="Фамилия И. О." />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Кафедра вашего руководителя</span>
              <input className="input100" type="text" name="faculty_p" value={this.state.faculty_p} onChange={(event)=>this.handleInputChange(event)} placeholder="ИУ5" />
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
