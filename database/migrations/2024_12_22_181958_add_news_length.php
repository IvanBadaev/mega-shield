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
        Schema::table('news', function (Blueprint $table) {
            $table->string('desc')->length(2048)->change();
            $table->string('imgUrl')->length(256)->change();
        });    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
