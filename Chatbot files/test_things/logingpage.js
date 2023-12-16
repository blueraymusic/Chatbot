
const passwordInput = document.getElementById("password");
const username = document.getElementById("username").value;
const errorMessage = document.getElementById("error-message");



passwordInput.addEventListener("input", function () {
  errorMessage.style.display = "none";
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const password = passwordInput.value;
  var crypto = require('crypto');
    var hash = crypto.createHash('sha256').update(password).digest('hex');
    var pass_crypt = crypto.createHash('sha256').update(hash).digest('hex');

    function Search(filePath, elementToSearch) {
        return new Promise((resolve, reject) => {
          let found = false;
          fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
              if (Object.values(row).includes(elementToSearch)) {
                found = true;
                console.log(`Element found in row:`, row);
                resolve();
              }
            })
            .on('end', () => {
              if (!found) {
                console.log(`Element not found in the file.`);
              }
              resolve();
            })
            .on('error', (error) => {
              reject(error);
            });
        });
      }
  if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters long";
    errorMessage.style.display = "block";
  } 


    
   
  
    });
  
   