class DocBuilder {
  constructor(JSONanswer) {
    this.type = JSON.stringify(JSONanswer.type).replace(/"/g,"");
    this.name_s = JSON.stringify(JSONanswer.name_s).replace(/"/g,"");
    this.student = JSON.stringify(JSONanswer.student).replace(/"/g,"");
    this.group = JSON.stringify(JSONanswer.group).replace(/"/g,"");
    this.faculty = JSON.stringify(JSONanswer.faculty).replace(/"/g,"");
    this.professor = JSON.stringify(JSONanswer.professor).replace(/"/g,"");
    this.faculty_p = JSON.stringify(JSONanswer.faculty_p).replace(/"/g,"");
    this.date = new Date();
   }

  buildDoc() {
    if(this.type == "diplom")
    {
      var docDefinition = {
        footer: [
          {text: "Москва "+this.date.getFullYear(), style: "header1"}
        ],
        content: [
          {
            table: {
              body: 
              [
            [
              {
                image: 'build/logo-big.png', 
                width: 100, 
                alignment: 'left',
                borderColor: ['#fff', '#fff', '#fff', '#000']
              }, 
              {
                borderColor: ['#fff', '#fff', '#fff', '#000'],
                stack: [
                  "МИНСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РФ",
                  "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ",
                  "«МОСКОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ИМЕНИ Н.Э. БАУМАНА»",
                  "(НАЦИОНААЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ)",
                  "(МГТУ ИМ. Н.Э. БАУМАНА)"
                ],
                style: 'header1'
              }
            ]
              ]
            }
          },
          {text: this.faculty.toUpperCase(), style: 'header1', margin: [ 0, 20, 0, 0 ]},
          {text: "КАФЕДРА «"+this.faculty_p.toUpperCase()+"»", style: 'header1', margin: [ 0, 10, 0, 0 ]},
          {text: "ВЫПУСКНАЯ  КВАЛИФИКАЦИОННАЯ  РАБОТА", style: 'header2', margin: [ 0, 80, 0, 0 ]},
          {text: "ДИПЛОМНАЯ РАБОТА:", style: 'header2', margin: [ 0, 10, 0, 0 ]},
          {text: "НА ТЕМУ:", style: 'header2', margin: [ 0, 10, 0, 0 ]},
          {text: this.name_s.toUpperCase(), style: 'header2', margin: [ 0, 15, 0, 0 ]},
          {
            margin: [ 0, 200, 0, 0 ],
            table: {
              margin: 0,
              alignment: 'center',
              widths: [ '*', '*' ],
              body:
              [
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "Студент ________________", style: "header3_1"},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "________________    ________________", style: "header3_2"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Группа)", style: "sub1"},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Подпись, дата)                (И.O. Фамилия)", style: "sub1"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "Руководитель курсовой работы", style: "header3_1"},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "________________    ________________", style: "header3_2"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: " "},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Подпись, дата)                (И.O. Фамилия)", style: "sub1"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "Консультант", style: "header3_1"}, 
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "________________    ________________", style: "header3_2"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: " "},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Подпись, дата)                (И.O. Фамилия)", style: "sub1"}]
              ]
            }
          },
        ],
        styles: 
        {
          header1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 14,
          },
          header2: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 16,
            bold: true,
          },
          header3_1: {
            font: 'Roman',
            alignment: 'left',
            fontSize: 14,
          },
          header3_2: {
            font: 'Roman',
            alignment: 'right',
            fontSize: 14,
          },
          sub1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 10,
          },
        },
      };
    }
    else if(this.type == "kursovaya")
    {
      var docDefinition = {
        footer: [
          {text: "Москва "+this.date.getFullYear(), style: "header1"}
        ],
        content: [
          {
            table: {
              body: 
              [
            [
              {
                image: 'build/logo-big.png', 
                width: 100, 
                alignment: 'left',
                borderColor: ['#fff', '#fff', '#fff', '#000']
              }, 
              {
                borderColor: ['#fff', '#fff', '#fff', '#000'],
                stack: [
                  "МИНСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РФ",
                  "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ",
                  "«МОСКОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ИМЕНИ Н.Э. БАУМАНА»",
                  "(НАЦИОНААЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ)",
                  "(МГТУ ИМ. Н.Э. БАУМАНА)"
                ],
                style: 'header1'
              }
            ]
              ]
            }
          },
          {text: this.faculty.toUpperCase(), style: 'header1', margin: [ 0, 20, 0, 0 ]},
          {text: "КАФЕДРА «"+this.faculty_p.toUpperCase()+"»", style: 'header1', margin: [ 0, 10, 0, 0 ]},
          {text: "КУРСОВАЯ РАБОТА", style: 'header2', margin: [ 0, 80, 0, 0 ]},
          {text: "НА ТЕМУ:", style: 'header2', margin: [ 0, 10, 0, 0 ]},
          {text: this.name_s.toUpperCase(), style: 'header2', margin: [ 0, 15, 0, 0 ]},
          {
            margin: [ 0, 200, 0, 0 ],
            table: {
              margin: 0,
              alignment: 'center',
              widths: [ '*', '*' ],
              body:
              [
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "Студент ________________", style: "header3_1"},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "________________    ________________", style: "header3_2"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Группа)", style: "sub1"},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Подпись, дата)                (И.O. Фамилия)", style: "sub1"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "Руководитель курсовой работы", style: "header3_1"},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "________________    ________________", style: "header3_2"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: " "},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Подпись, дата)                (И.O. Фамилия)", style: "sub1"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "Консультант", style: "header3_1"}, 
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "________________    ________________", style: "header3_2"}
            ],
            [
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: " "},
              {borderColor: ['#fff', '#fff', '#fff', '#fff'],text: "(Подпись, дата)                (И.O. Фамилия)", style: "sub1"}]
              ]
            }
          },
        ],
        styles: 
        {
          header1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 14,
          },
          header2: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 16,
            bold: true,
          },
          header3_1: {
            font: 'Roman',
            alignment: 'left',
            fontSize: 14,
          },
          header3_2: {
            font: 'Roman',
            alignment: 'right',
            fontSize: 14,
          },
          sub1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 10,
          },
        },
      };
    }
    else if(this.type == "referat")
    {
      var docDefinition = {
        footer: [
          {text: "Москва "+this.date.getFullYear(), style: "header1"}
        ],
        content: [
          {
            table: {
              body: 
              [
            [
              {
                image: 'build/logo-big.png', 
                width: 100, 
                alignment: 'left',
                borderColor: ['#fff', '#fff', '#fff', '#000']
              }, 
              {
                borderColor: ['#fff', '#fff', '#fff', '#000'],
                stack: [
                  "МИНСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РФ",
                  "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ",
                  "«МОСКОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ИМЕНИ Н.Э. БАУМАНА»",
                  "(НАЦИОНААЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ)",
                  "(МГТУ ИМ. Н.Э. БАУМАНА)"
                ],
                style: 'header1'
              }
            ]
              ]
            }
          },
          {text: "РЕФЕРАТ", style: 'header2', margin: [ 0, 100, 0, 0 ]},
          {text: "НА ТЕМУ:", style: 'header2', margin: [ 0, 10, 0, 0 ]},
          {text: this.name_s.toUpperCase(), style: 'header2', margin: [ 0, 15, 0, 0 ]},
          {
            margin: [ 0, 200, 10, 0 ],
            stack: [
              {text:"Выполнил: "+this.name_s,style:'header3'},
              {text:"Студент группы "+this.group+" кафедры "+this.faculty,style:'header3'},
              {text:"Проверил: "+this.professor,style:'header3'},
              {text:"Доцент кафедры "+this.faculty_p,style:'header3'},
            ]

          },
        ],
        styles: 
        {
          header1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 14,
          },
          header2: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 16,
            bold: true,
          },
          header3: {
            font: 'Roman',
            alignment: 'right',
            fontSize: 14,
            bold: true,
          }
        },
      };
    }

    if(docDefinition == undefined)
    {
      console.log(JSON.stringify(JSONanswer));
      throw new Error("docDefinition is undefined");
    }
    else
    {
      return docDefinition;
    }
  };
}

module.exports = DocBuilder;
