<?php

namespace Database\Seeders;

use Database\Factories\CategoryFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate a unique category name
        $mainCategories = [
            'Electronics & Gadgets',
            'Fashion & Apparel',
            'Home & Living',
            'Beauty & Personal Care',
            'Health & Wellness',
            'Sports & Outdoor',
            'Toys, Kids & Babies',
            'Automotive & Industrial',
            'Books, Music & Media',
            'Food & Beverages',
            'Office & School Supplies',
            'Pet Supplies',
            'Jewelry & Accessories',
            'Gifts & Party Supplies',
            'Real Estate & Rentals',
        ];

        foreach ($mainCategories as $categoryName) {
            Category::factory()->create([
                'category' => $categoryName,
                'slug' => Str::slug($categoryName),
            ]);
        }
    }
}
