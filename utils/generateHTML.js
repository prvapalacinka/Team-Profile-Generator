function generateHTML(employees) {
  var employeePanels = '';
  // make a for loop through employee
  for (let i = 0; i < employees.length; i++) {
    console.log('hello', employees[i]);

    if (employees[i].addEmployee == 'Engineer') {
      var engineerPanel = ` <div class="panel panel-default">
        <div class="panel-heading">Engineer</div>
        <div class="panel-body">${employees[i].name}</div>
        <div class="panel-body">${employees[i].employeeID}</div>
        <div class="panel-body">${employees[i].email}</div>
        <div class="panel-body">${employees[i].github}</div>
        </div>`
      employeePanels = employeePanels + engineerPanel;
    }
    else if (employees[i].addEmployee == 'Intern') {
      var internPanel = ` <div class="panel panel-default">
  <div class="panel-heading">Intern</div>
  <div class="panel-body">${employees[i].name}</div>
  <div class="panel-body">${employees[i].employeeID}</div>
  <div class="panel-body">${employees[i].email}</div>
  <div class="panel-body">${employees[i].school}</div>
  </div>`
      employeePanels = employeePanels + internPanel;
    }
    else {
      var managerPanel = ` <div class="panel panel-default">
  <div class="panel-heading">Manager</div>
  <div class="panel-body">${employees[i].managername}</div>
  <div class="panel-body">${employees[i].employeeID}</div>
  <div class="panel-body">${employees[i].email}</div>
  <div class="panel-body">${employees[i].officenumber}</div>
  </div>`
      employeePanels = employeePanels + managerPanel;
    }
  }


  //    
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <title>HTML</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="hero-image">
    <div class="hero-text">
      <h1>My Team</h1>
      <p>Showcased are my team members with position titles and descriptions, alongside their methods of contact.</p>
    </div>
  </div>
  <br>
  <div class="container">
    <h2>Panels with Contextual Classes</h2>
    <div class="panel-group">
    ${employeePanels}
    </div>
</body>

</html>`
};

module.exports = generateHTML;