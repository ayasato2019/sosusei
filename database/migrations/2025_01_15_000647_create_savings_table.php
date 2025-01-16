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
            // $table->unsignedBigInteger('comment_id');
            $table->unsignedBigInteger('comment_id')->nullable()->change();
            $table->unsignedBigInteger('goal_group_id')->default(1); // 初期値1
            $table->string('goal_name');
            $table->integer('goal_amount'); // 金額は通常小数点を含む
            $table->date('goal_date');
            $table->unsignedInteger('goal_level'); // 数値フィールド
            $table->string('goal_images');
            $table->boolean('is_shared')->default(false); // デフォルトはfalse
            $table->unsignedBigInteger('comment_id')->nullable();  // comment_idをnullableに変更
            $table->text('memo')->nullable(); // 任意のメモフィールド
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
