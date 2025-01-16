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
        Schema::create('histories', function (Blueprint $table) {
            $table->id('history_id');
            $table->foreignId('user_id')->constrained('users');
            // $table->unsignedBigInteger('comment_id');
            $table->unsignedBigInteger('comment_id')->nullable();
            $table->unsignedBigInteger('goal_group_id')->default(1); // 初期値1
            $table->integer('category')->default(1); // 一旦は全て貯金カテゴリ
            $table->decimal('amount_saved', 15, 2); // 金額は通常小数点を含む
            $table->date('date_saved'); // 貯金した日
            $table->string('memo_images')->nullable(); //レシートとか
            $table->boolean('is_shared')->default(false); // デフォルトはfalse
            $table->text('memo')->nullable(); // 任意のメモフィールド
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('histories');
    }
};
