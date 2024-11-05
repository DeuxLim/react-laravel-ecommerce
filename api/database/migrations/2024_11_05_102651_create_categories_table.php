<?php

use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID
            $table->string('category')->unique(); // Unique category name
            $table->string('slug')->unique(); // SEO-friendly slug
            $table->string('description'); // Description of the category
            $table->string('icon')->nullable(); // Optional icon
            $table->foreignId('parent_id')->nullable()->constrained('categories')->onDelete('cascade'); // Self-referencing parent ID for subcategories
            $table->integer('sort_order')->default(0); // Order in which to display categories
            $table->timestamps(); // Created at and updated at timestamps
            $table->softDeletes(); // Soft deletes for restoration
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
