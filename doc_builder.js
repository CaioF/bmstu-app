class DocBuilder {
  constructor(JSONanswer) {
    this.type = JSON.stringify(JSONanswer.type).replace(/"/g,"");
    this.name_s = JSON.stringify(JSONanswer.name_s).replace(/"/g,"");
    this.student = JSON.stringify(JSONanswer.student).replace(/"/g,"");
    this.group = JSON.stringify(JSONanswer.group).replace(/"/g,"");
    this.faculty = JSON.stringify(JSONanswer.faculty).replace(/"/g,"");
    this.grade = JSON.stringify(JSONanswer.grade).replace(/"/g,"");
    this.professor = JSON.stringify(JSONanswer.professor).replace(/"/g,"");
    this.faculty_p = JSON.stringify(JSONanswer.faculty_p).replace(/"/g,"");
    this.date = new Date();
   }

  buildDoc() {
    if(this.type == "diplom")
    {
      var docDefinition = {
        content: [
          {
            margin: [30, 20, 10, 20],
            table: {
              body: [
            [
              {image: 'build/logo-big.png', width: 130}, 
              {
                stack: [
                  "МИНСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РФ",
                  "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ",
                  "«МОСКОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ИМЕНИ Н.Э. БАУМАНА»",
                  "(НАЦИОНААЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ)",
                  "(МГТУ ИМ. Н.Э. БАУМАНА)",
                  "КАФЕДРА "+this.faculty_p.toUpperCase()
                ],
                style: 'header1',
              }
            ]
              ]
            }
          }
        ],
        styles: 
        {
          header1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 14,
          },
        },
      };
    }
    else if(this.type == "kursovaya")
    {
      var docDefinition = {
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
                style: 'header1',
              }
            ],
              ]
            },
          },
          {text: " "},
          {text: " "},
          {text: "КАФЕДРА «"+this.faculty_p.toUpperCase()+"»", style: 'header1'},
          {text: " "},
          {text: " "},
          {text: " "},
          {text: " "},
          {text: "КУРСОВАЯ РАБОТА", style: 'header2'},
          {text: " "},
          {text: "НА ТЕМУ:", style: 'header2'},
          {text: " "},
          {text: this.name_s, style: 'header2'},
          {text: " "},
          {text: " "},
          {text: " "},
          {text: " "},
          {
            table: {
              body:
              [
            [{text: "Студент ________________", style: "header3_1"}, {text: "Студент ________________", style: "header3_2"},],
            [{text: "(Группа)", style: "sub1"},{text: "(Подпись, дата)           (И.O. Фамилия)", style: "sub1"}],
            [{text: "Руководитель курсовой работы", style: "header3_1"}, {text: "Студент ________________", style: "header3_2"},],
            [{text: " "},{text: "(Подпись, дата)           (И.O. Фамилия)", style: "sub1"}],
            [{text: "Консультант", style: "header3_1"}, {text: "Студент ________________", style: "header3_2"}],
            [{text: " "},{text: "(Подпись, дата)           (И.O. Фамилия)", style: "sub1"}]
              ]
            }
          },
          {text: "Москва "+this.date.getFullYear(), style: "header1"}
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
        content: [
          {
            table: {
              body: [
            [
              {image: 'build/logo-big.png', width: 130}, 
              {
                stack: [
                  "МИНСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РФ",
                  "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ",
                  "«МОСКОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ИМЕНИ Н.Э. БАУМАНА»",
                  "(НАЦИОНААЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ)",
                  "(МГТУ ИМ. Н.Э. БАУМАНА)",
                  "КАФЕДРА "+this.faculty_p.toUpperCase()
                ],
                style: 'header1',
              }
            ]
              ]
            }
          }
        ],
        styles: 
        {
          header1: {
            font: 'Roman',
            alignment: 'center',
            fontSize: 14,
          },
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
