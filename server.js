//express+parser requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//pdf engine requiremenets 
const pdfMakePrinter = require('pdfmake/src/printer'); //pdf make lib for PUTting pdf files
const DocBuilder = require('./doc_builder.js'); //custom builder for the 3 types of pdfs
global.JSONanswer = {}; //global var to store, manipulate and pass the response from the web-app form

//server middleware//
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

//paths//
app.get('/api/pdf', (req, res) => {
  try
  {
    const thisBuilder = new DocBuilder(JSONanswer);
    generatePdf(thisBuilder.buildDoc(), (response) => {
      res.setHeader('Content-Type', 'application/pdf');
      res.send(response); // Buffer data
    });
  }
  catch
  {
    res.statusMessage = "Form needs to be filled before pdf file can be delivered!";
    res.status(404).end();
  }
});

app.post('/api/pdf', (req, res) => {
  JSONanswer = req.body;
  res.redirect('../api/pdf');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//main pdf generation function
function generatePdf(docDefinition, callback) {
  try {
    const fonts = {
      Roboto: {
    		normal: 'build/fonts/Roboto-Regular.ttf',
    		bold: 'build/fonts/Roboto-Medium.ttf',
    		italics: 'build/fonts/Roboto-Italic.ttf',
    		bolditalics: 'build/fonts/Roboto-MediumItalic.ttf'
	    },
      Roman: {
        normal: 'build/fonts/times-new-roman-cyr.ttf',
        bold: 'build/fonts/times-new-roman-cyr-bold.ttf',
      }
    };

    const printer = new pdfMakePrinter(fonts);
    const doc = printer.createPdfKitDocument(docDefinition);

    let chunks = [];

    doc.on('data', (chunk) => {
      chunks.push(chunk);
    }); //on PUTing of the pdf from the printer library push it to the chunks array

    doc.on('end', () => {
       callback(Buffer.concat(chunks)); //callback with the PDF file to app.get('/api/pdf' ... );
     });

    doc.end();

  } catch(err) {
    throw(err);
  }
};

app.listen(8008, () =>
{
  console.log("> Express server is running on 'IPv4':8008\n> To have the app working at your IP:\n> 1.Edit the IPv4 at the 'form(1-3).jsx' at 'src/components/'\n> 2.Rebuild with 'npm run build'");
});