const layoutPage = data => {

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <title>What is my battery</title>
  <meta name="description" content="A cute and simple battery web application to display the users battery.">

  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <!-- Application Manifest -->
  <link rel="manifest" href="/manifest.json">
</head>
<body>
  ${data.markup}

  <script src="/static/bundle.js"></script>
</body>
</html>
  `;
};

export default layoutPage;