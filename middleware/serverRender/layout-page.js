const layoutPage = data => {

  return `
<!DOCTYPE html>
<html>
<head>
  <title>What is my battery</title>
</head>
<body>
  <div class="application">
    ${data.markup}
  </div>

  <script>
    window.data = ${JSON.stringify(data.defaultData)}
  </script>
  <script src="/static/bundle.js"></script>
</body>
</html>
  `;
};

export default layoutPage;