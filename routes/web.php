<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\VacancyFormController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::post('/contact-form-submit', [ContactFormController::class, 'submitForm'])->middleware('throttle:5,1');
Route::post('/vacancy-form-submit', [VacancyFormController::class, 'submitForm'])->middleware('throttle:5,1');
Route::get('/policy', [PageController::class, 'policy']);
Route::get('/', [PageController::class, 'home']);