<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'product' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric', 'min:0.01'],
            'stock' => ['nullable', 'integer', 'min:0'],
            'status' => ['nullable', 'in:active,inactive,out_of_stock'],
            'image' => ['nullable','string'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'user_id' => ['nullable', 'exists:users,id']
        ];
    }
}
