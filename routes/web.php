<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\SavingController;
use App\Http\Controllers\HistoryController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('./login', function () {
    return Inertia::render('Auth.Login', [AuthenticatedSessionController::class, 'create'])->name('login');
});
Route::get('./register', function () {
    return Inertia::render('Auth.Register', [AuthenticatedSessionController::class, 'store'])->name('register');
});


Route::get('./dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('./profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('./profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('./profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//初期ステータスの登録
Route::middleware('auth')->group(function () {
    Route::get('./registration', [StatusController::class, 'create'])->name('create');
    Route::post('./confirm', [StatusController::class, 'store'])->name('store');
    //目標の登録
    Route::get('./goal-registration', [SavingController::class, 'create'])->name('Saving_Goal_Create');
    Route::post('./goal-confirm', [SavingController::class, 'store'])->name('goal-confirm');
    //ユーザーページ
    Route::get('./userpage', [StatusController::class, 'index'])
    ->middleware(['auth', 'verified'])->name('Saving_List');
    //詳細ぺーじ
    Route::get('./{id}', [SavingController::class, 'show'])->name('saving.show');
    Route::post('./update', [HistoryController::class, 'store'])->name('update');

});

require __DIR__.'/auth.php';
