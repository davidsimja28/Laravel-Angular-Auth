<?php

//use Illuminate\Http\Request;

Route::group([

    'middleware' => 'api',

    //$router
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::post('categoria', 'CategoriaController@create');
    Route::get('categorias', 'CategoriaController@list');
    Route::put('categoria', 'CategoriaController@update');



});
