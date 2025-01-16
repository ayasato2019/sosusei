<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\SavingController;
use App\Http\Controllers\HistoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
});
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
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

//詳細ぺーじ
Route::middleware('auth')->group(function () {
    Route::get('/{id}', [SavingController::class, 'show'])->name('saving.show');
    Route::post('/update', [HistoryController::class, 'store'])->name('update');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
