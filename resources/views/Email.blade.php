<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name=Email content="emailed response of contact form">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Joshua Lucas</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="font-main bg-primary text-onyx">
    <div>

        <h1>Response form your Portfolio</h1>

        <ul>
            <li>Name: {{ $name }}</li>
            <li> Email: {{$email}} </li>
            <li> Reason: {{$reason}} </li>
            <li> Message: {{$response}} </li>
        </ul>

    </div>

</body>
<script type="text/javascript" src="js/app.js"></script>

</html>