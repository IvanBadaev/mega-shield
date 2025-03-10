<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>{{ config('app.name', 'Laravel') }}</title>
    @vite('resources/js/App.jsx')
    @vite('resources/css/style.css')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
  <script src="https://unpkg.com/alpinejs" defer></script>
</html>