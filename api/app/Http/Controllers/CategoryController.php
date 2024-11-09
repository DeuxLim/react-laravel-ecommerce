<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::with(['product', 'parent', 'subcategories'])->get();
        return CategoryResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $validatedCategory = $request->validated();

        $validatedCategory['slug'] = Str::slug($validatedCategory['category']);

        $newCategory = Category::create($validatedCategory);

        return new CategoryResource($newCategory);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $updateFields = $request->validated();

        // TODO : slug needs to be updated also if name is updated.

        $category->update($updateFields);

        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        // Check if category exists before attempting to delete it
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        // Optionally: Check if the category has subcategories (or any other constraints)
        if ($category->subcategories->isNotEmpty()) {
            return response()->json(['message' => 'Cannot delete category with subcategories'], 400);
        }

        // Delete the category
        $category->delete();

        // Return a response indicating success
        return response()->json(['message' => 'Category deleted successfully'], 200);
    }

    /**
     * Get category hierarchy
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function getCategoryHierarchy(Category $category)
    {
        $hierarchy = $category->load('subcategories');
        return new CategoryResource($hierarchy);
    }
}
