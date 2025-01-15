<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('savings', function (Blueprint $table) {
            $table->id('saving_id');
            $table->foreignId('user_id')->constrained('users');
            $table->integer('comment_id');
            $table->integer('goal_group_id');
            $table->string('goal_name');
            $table->integer('goal_amount');
            $table->date('goal_date');
            $table->integer('goal_level');
            $table->string('goal_images');
            $table->boolean('is_shared');
            $table->text('memo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('savings');
    }
};
