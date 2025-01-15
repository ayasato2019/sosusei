<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\SavingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/registration', function () {
    //     return Inertia::render('Welcome', [StatusController::class, 'create'
    //         // 'canLogin' => Route::has('login'),
    //         // 'canRegister' => Route::has('register'),
    //         // 'laravelVersion' => Application::VERSION,
    //         // 'phpVersion' => PHP_VERSION,
    //     ]);
    // });

    // Route::get('/registration', function () {
    //     return Inertia::render('Welcome', [StatusController::class, 'create'])->name('Welcome');
    // });

Route::get('/', [StatusController::class, 'index'])->name('Saving_List');

//初期ステータスの登録
Route::get('/registration', [StatusController::class, 'create'])->name('Welcome');
Route::post('/confirm', [StatusController::class, 'store'])->name('confirm');


//目標の登録
Route::get('/goal-registration', [SavingController::class, 'create'])->name('Saving_Goal_Create');
Route::post('/goal-confirm', [SavingController::class, 'store'])->name('Saving_Goal_confirm');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
