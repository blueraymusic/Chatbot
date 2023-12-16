  
const passwordInput = document.getElementById("password");
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const errorMessage = document.getElementById("error-message");
const XLSX = require('xlsx');

const Re_password = document.getElementById("Re_password").value;
passwordInput.addEventListener("input", function () {
  errorMessage.style.display = "none";
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const password = passwordInput.value;
  
  if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters long";
    errorMessage.style.display = "block";
  } else if (Re_password !== password) {
      errorMessage.textContent = "Passwords do not match";
      errorMessage.style.display = "block";     
  } 
  try {
    const workbook = XLSX.readFile('C:\\Users\\minas\\Desktop\\vscode (Adel\\Chatbot files\\User_data.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    const match = data.filter(user => user.Username === username && user.Password === password);
    
    if (match.length > 0) {
      errorMessage.textContent = "Username and password already exist";
      errorMessage.style.display = "block";
    } else {
      var crypto = require('crypto');
      var hash = crypto.createHash('sha256').update(password).digest('hex');
      var pass_crypt = crypto.createHash('sha256').update(hash).digest('hex');
      console.log(pass_crypt);

      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet([{Username: username, Email: email, Password: pass_crypt}]);
      XLSX.utils.book_append_sheet(workbook, sheet, 'User_data');
      XLSX.writeFile(workbook, 'C:\\Users\\minas\\Desktop\\vscode (Adel\\Chatbot files\\User_data.xlsx');

      window.location.href = 'C:\\Users\\minas\\Desktop\\vscode (Adel\\Chatbot files\\Loginpage.html';
    }
  } catch (error) {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet([{Username: username, Email: email, Password: pass_crypt}]);
    XLSX.utils.book_append_sheet(workbook, sheet, 'User_data');
    XLSX.writeFile(workbook, 'C:\\Users\\minas\\Desktop\\vscode (Adel\\Chatbot files\\User_data.xlsx');

    window.location.href = 'C:\\Users\\minas\\Desktop\\vscode (Adel\\Chatbot files\\Loginpage.html';
  }
});