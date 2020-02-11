import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "diplom",
      name_s: "",
      student: "NULL",
      group: "NULL",
      faculty: "",
      professor: "NULL",
      faculty_p: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, event });
  }

  handleClick(event) {
    if (JSON.stringify(this.state.name_s).replace(/"/g,"").lenght > 150) { alert('Количество знаков названия работы не должен превышать 150!'); }
    else if (JSON.stringify(this.state.faculty).replace(/"/g,"").lenght > 75) { alert('Количество знаков названия факультета/кафедры не должен превышать 75!'); }
    else if (JSON.stringify(this.state.faculty_p).replace(/"/g,"").lenght > 75) { alert('Количество знаков названия факультета/кафедры не должен превышать 75!'); }
    else if (JSON.stringify(this.state.name_s).replace(/"/g,"") === "") { alert('Поле "Название дипломной работы" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.faculty).replace(/"/g,"") === "") { alert('Поле "Факультет вашего руководителя" не должно быть пустым!'); }
    else if (JSON.stringify(this.state.faculty_p).replace(/"/g,"") === "") { alert('Поле "Кафедра вашего руководителя" не должно быть пустым!'); }
    else 
    {
      fetch('http://192.168.43.91:8008/api/pdf', { //IPv4
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
          window.setTimeout(window.location='http://192.168.43.91:8008/api/pdf', 60); //IPv4
        } else {
          alert('Ошибка сервера!\nПроверьте что все поля заполнены правильно');
          console.log(`${JSON.stringify(response)}`);
        }
      });
    };
  }

  render() {
      return (
        <div className="container-contact100">
        <div className="wrap-contact100">
          <form name ="myForm" className="contact100-form">
            <span className="contact100-form-title">
              Оформление титульного листа для диплломной работы
            </span>
            <div className="wrap-input100">
              <span className="label-input100">Название диплломной работы</span>
              <input className="input100" type="text" name="name_s" value={this.state.name_s} onChange={(event)=>this.handleInputChange(event)} placeholder="Научный анализ котов" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Факультет вашего руководителя</span>
              <input className="input100" type="text" name="faculty" value={this.state.faculty} onChange={(event)=>this.handleInputChange(event)} placeholder="Факультет социо-гуманитарных наук" />
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Кафедра вашего руководителя</span>
              <input className="input100" type="text" name="faculty_p" value={this.state.faculty_p} onChange={(event)=>this.handleInputChange(event)} placeholder="Информационная аналитика и политические технологий" />
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
