<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

function projects($slug = null) {
    $projects = [
        "baksteen" => [
            "title" => "Baksteen IV",
            "slug" => "baksteen",
            "website" => "https://bkstn.be",
            "technologies" => "HTML / CSS / JavaScript",
            "quick_description" => "The best jump up party in whole belgium, the most and best artists from all over whole world in one big party.",
            "objective" => "Baksteen had designs for their website but did not find anyone who could make those
                designs in a responsive website. Also implenting an external partner was needed.",
            "solution" => "Using build tools like SASS & Gulp a website was created using basic techniques.
                Ofcourse making the site work on mobile devices, a.k.a making it responsive was not forgotton.
                <br><br>
                To make sure the client was happy with the website, a constant delivery cycle was kept.
                Every day the client was updated with the status of their website and feedback was given by the
                client and then worked with by me. Ending with a perfect website for the client.",
            "results" => "A fully working website with the external website tickerscript implemented so people
                are able to pre-order / buy their ticket online. Overall response to the finished website
                was very positive.",
            "images" => [
                "1",
                "2",
                "3"
            ]

        ],
        "simulatorradio" => [
            "title" => "Simulator Radio",
            "slug" => "simulatorradio",
            "website" => "https://simulatorradio.com",
            "technologies" => "HTML / CSS / Vue / Api",
            "quick_description" => "From a backend djpanel to a frontend build with VueJS, it has it all.",
            "objective" => "Simulator Radio desperately needed a new website to attract more visitors,
                I sat together with the 2 owners and laid out a plan that spanned several months
                that will boost their listeners amount and a plan that would improve the interaction between
                the presenters and the listeners.",
            "solution" => "Spanning the 2 months the first plan of action was to create a new interface
                that would enable the presenters to accept song requests from the active listeners.
                An improved booking system for the presenter was also implemented to ease the load on
                the administration. This enabled them to have more interaction with the listeners.
                <br><br>
                After the new interface was finished, a whole new website was created where listeners could
                more easily find their favorite presenter and look up their favorite songs. All this is connected
                through the earlier mentioned backend.",
            "results" => "Entering their first month with the website, a significant count in listener amount was noticed.
                There was a 50% boost in listening time. And a 20% boost in listener amount.
                They average 1000 around listeners on a good day.",
            "images" => [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        ],
        "pokemap" => [
            "title" => "Pokémap",
            "slug" => "pokemap",
            "website" => false,
            "technologies" => "HTML / CSS / NodeJS / Api",
            "quick_description" => "From back with the Pokémon Go hype: A tool which lets you select a region and view the gyms and their status",
            "objective" => "Back when Pokémon Go was a thing there was only one goal to the game: capture gyms and
                make sure your color (Blue / Yellow / Red) is at the top. Of course i was to lazy to go around
                all the gyms in my neighbourhood to check if they were taken. Hence this tool",
            "solution" => "Registering around 12 Pokémon Go accounts and getting their API credentials, i created
                a NodeJS script together with the Express library to create a WebUI which allow you to select
                a region and see what gyms are available in that place and what their current status is
                <br><br>
                The gym status was received by teleporting the 12 bot accounts around and checking what gyms were
                available in the selected region.",
            "results" => "The tool worked for around a week until Niantic banned the 12 accounts for hacking (what 
                essentially was happening). Though good fun was had during that warm summer.",
            "images" => [
                "1"
            ]
        ],
        "chromaservers" => [
            "title" => "Chroma Servers",
            "slug" => "chromaservers",
            "website" => false,
            "technologies" => "HTML / CSS / PHP / Api",
            "quick_description" => false,
        ],
        "egn" => [
            "title" => "Extreme Gaming Networks",
            "slug" => "egb",
            "website" => false,
            "technologies" => "HTML / CSS / PHP / Api",
            "quick_description" => false,
        ],
        "hetidealejournaal" => [
            "title" => "Het Ideale Journaal",
            "slug" => "hetidealejournaal",
            "website" => false,
            "technologies" => "HTML / CSS / Android Studio / Java",
            "quick_description" => false,
        ],
        "steamboosting" => [
            "title" => "Steamboosting",
            "slug" => "steamboosting",
            "website" => false,
            "technologies" => "HTML / CSS / NodeJS / Api",
            "quick_description" => false,
        ],
        "begn" => [
            "title" => "EGN Billing",
            "slug" => "begn",
            "website" => false,
            "technologies" => "HTML / CSS / WHMCS / PHP",
            "quick_description" => false,
        ],
        "tdfm" => [
            "title" => "The Digital Free Market",
            "slug" => "tdfm",
            "website" => false,
            "technologies" => "HTML / CSS / SMF / PHP",
            "quick_description" => false,
        ]
    ];

    if ($slug == null)
        return $projects;

    return $projects[$slug];
}

Route::get('/api/projects', function() {
    return response()->json(projects());
});

Route::get('/api/project/{slug}', function($slug) {
    return response()->json(projects($slug));
});

Route::get('/{vue_capture?}', function () {
    return view('index');
})->where('vue_capture', '[\/\w\.-]*');