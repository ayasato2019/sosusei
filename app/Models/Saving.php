<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saving extends Model
{
    use HasFactory;
    protected $primaryKey = 'saving_id';
    // protected $table = 'savings'; // 必要に応じて
    // protected $primaryKey = 'saving_id'; // 必要に応じて
    // public $timestamps = true;   // デフォルトで有効
    // protected $fillable = [
    //     'goal_name',
    //     'goal_amount',
    //     'goal_date',
    //     'goal_level',
    //     'goal_images',
    //     'is_shared',
    //     'memo',
    // ];
    // protected $casts = [
    //     'goal_amount' => 'integer',
    //     'goal_date' => 'date',
    //     'is_shared' => 'boolean',
    // ];
}
