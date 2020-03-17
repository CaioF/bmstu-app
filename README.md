# Титуль-шник МГТУ им. Н. Э. Баумана

Приложение для оформления титульных листов по ГОСТу, система создана для автоматизирования и нормализирования оформления титульных листов.<br>

## Чтобы запустит приложение:

### 1. `git clone https://github.com/CaioF/bmstu-app.git`<br>
Clones the repo into a new folder.

### 2. `cd bmstu-app`
Change your terminal directory into the `bmstu-app` folder.<br>

### 3. `npm install`
Installs all the required dependencies
* **Warning! App is configured to work with nodejs 10.**<br>

### 4. Поменяйте IP в файлах внутри папки компонентов
App is configured to work on a local host via the local IPv4 adress. Follow these steps to do so: 
* Get your IPv4 via `ipconfig` (on Windows) or `ip addr show` (on Linux).
* Change the IPs on the files inside the `/components` folder.<br>

### 5. Добавляйте ссылку на базу данных в `server.js`
You need to add the connection link to your mongodb database.<br>
Put your local or remote linkeat line 16 `const uri = ...` in the `server.js` file<br>

### 6. `npm run build`
Builds the app for production to the `build` folder.<br>

### 7. `node server.js`
Starts the app.<br>

### 8. Open your browser and type in: `http://your.ipv4.adress:8008`
Opens the app.<br>
* **Warning! App was tested on google chrome.**<br>

## BAT Executable for lazy upkeeping:
`@echo on`<br>
`taskkill /IM "node.exe" /F`<br>
`cd C:\path\to\bmstu-app`<br>
`start cmd /k node server.js`<br>
`ping your.ipv4.adress`<br>
`start "" http://your.ipv4.adress:8008`<br>
`pause`
