<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Akxis</title>

    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}">
</head>
<body class="status__loading">
    <div id="app" :class="{'menu--hover': class_hover}">
        <div class="loader">
            <div class="loader__container">
                <div class="loader__bar"></div>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li class="menu__item" @mouseover="startHover" @mouseleave="stopHover">
                    <router-link :to="{name: 'index'}">
                        <span class="menu__accent">집</span>
                        <span class="menu__title">Home</span>
                    </router-link>
                </li>
                <li class="menu__item" @mouseover="startHover" @mouseleave="stopHover">
                    <router-link :to="{name: 'projects'}">
                        <span class="menu__accent">젝</span>
                        <span class="menu__title">Projects</span>
                    </router-link>
                </li>
                <li class="menu__item" @mouseover="startHover" @mouseleave="stopHover">
                    <router-link :to="{name: 'about'}">
                        <span class="menu__accent">약</span>
                        <span class="menu__title">About</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="wrapper">
            <router-view :key="$route.fullPath">

            </router-view>
        </div>

        <div class="transition">
            <div class="transition__layer transition__layer--1"></div>
            <div class="transition__layer transition__layer--2"></div>
            <div class="transition__layer transition__layer--3"></div>
        </div>
    </div>

    <script src="{{ mix('assets/js/app.js') }}"></script>
</body>
</html>