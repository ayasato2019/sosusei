<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\SavingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index', [StatusController::class,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//初期ステータスの登録
Route::middleware('auth')->group(function () {
    Route::get('/registration', [StatusController::class, 'create'])->name('create');
    Route::post('/confirm', [StatusController::class, 'store'])->name('store');
});

//目標の登録
Route::middleware('auth')->group(function () {
    Route::get('/goal-registration', [SavingController::class, 'create'])->name('Saving_Goal_Create');
    Route::post('/goal-confirm', [SavingController::class, 'store'])->name('goal-confirm');
});

//ユーザーページ
Route::get('/userpage', [StatusController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('Saving_List');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
