function generateHTML(employees) {



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
      <div class="panel panel-default">
        <div class="panel-heading">Manager</div>
        <div class="panel-body">Panel Content</div>
        <div class="panel-body">Panel Content</div>
        <div class="panel-body">Panel Content</div>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">Engineer</div>
        <div class="panel-body">Panel Content</div>
        <div class="panel-body">Panel Content</div>
        <div class="panel-body">Panel Content</div>

      </div>

      <div class="panel panel-success">
        <div class="panel-heading">Intern</div>
        <div class="panel-body">Panel Content</div>
        <div class="panel-body">Panel Content</div>
        <div class="panel-body">Panel Content</div>
      </div>
    </div>
</body>

</html>`
} 

module.exports = generateHTML;