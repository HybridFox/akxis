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

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::group(['prefix' => 'api'], function() {
    Route::group(['prefix' => 'v1'], function() {
        Route::get('projects', function() {
            return response()->json(\App\Project::all());
        });
        Route::get('project/{slug}', function($slug) {
            return response()->json(\App\Project::where('slug', '=', $slug)->first());
        });

        Route::get('skills', function() {
            return response()->json(\App\Skill::all());
        });
        Route::get('skill/{slug}', function($slug) {
            return response()->json(\App\Skill::where('slug', '=', $slug)->first());
        });
    });
});

Route::get('/{vue_capture?}', function () {
    return view('index');
})->where('vue_capture', '[\/\w\.-]*');
