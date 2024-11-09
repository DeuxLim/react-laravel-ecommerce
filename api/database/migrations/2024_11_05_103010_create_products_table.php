<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Category;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();  // Auto-incrementing ID
            $table->string('name')->unique();  // Unique product name
            $table->string('slug')->unique();  // SEO-friendly slug for URLs
            $table->text('description');  // Product description (long text)
            $table->decimal('price', 10, 2);  // Product price (stored as decimal for precision)
            $table->integer('stock')->default(0);  // Available stock quantity
            $table->enum('status', ['active', 'inactive', 'out_of_stock'])->default('active');  // Product status
            $table->string('image');  // Image URL/path
            $table->foreignIdFor(Category::class)->constrained()->onDelete('cascade');  // Category reference
            $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');  // Seller/user reference
            $table->timestamps();  // Created at and updated at timestamps
            $table->softDeletes();  // Soft delete (for archival purposes)
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
