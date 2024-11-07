<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Product;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'category',
        'slug',
        'description',
        'icon',
        'parent_id',
        'sort_order'
    ];

    public function product()
    {
        return $this->hasMany(Product::class);
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function subcategories()
    {
        return $this->hasMany(Category::class, 'parent_id')->with('subcategories');
    }
}
