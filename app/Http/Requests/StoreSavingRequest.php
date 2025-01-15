<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSavingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'goal_name' => ['required', 'string', 'max:50'],
            // 'goal_amount' => ['required', 'numeric', 'max:1000000000'],
            // 'goal_date' => ['required', 'date'],
            // 'goal_level' => ['required', 'numeric', 'max:10'],
            // // 'goal_images' => ['nullable', 'file'], // 画像ファイルが送信されない場合に備えて 'nullable'
            // 'is_shared' => ['nullable', 'boolean'],
            // 'memo' => ['nullable', 'string'],
        ];
    }
}
