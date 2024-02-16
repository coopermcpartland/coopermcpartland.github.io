<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Spinning COOPER</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');

  body {
    background-color: black;
  }

  .spinner {
    font-family: 'Anonymous Pro', monospace;
    text-transform: uppercase;
    color: red;
    font-size: 48px;
    display: inline-block;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
</head>
<body>
  <div class="spinner">COOPER</div>
</body>
</html>
