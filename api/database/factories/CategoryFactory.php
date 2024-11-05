<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        // Generate a unique category name
        $categoryName = $this->faker->unique()->word;

        return [
            'category' => $categoryName,
            'slug' => Str::slug($categoryName),
            'description' => $this->faker->sentence(),
            'icon' => $this->faker->imageUrl(),
            'parent_id' => Category::exists() && $this->faker->boolean(50) ? Category::inRandomOrder()->value('id') : null,
            'sort_order' => $this->faker->numberBetween(0, 100), // Random order for sorting purposes
        ];
    }
}
