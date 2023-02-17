<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CountryRequest extends FormRequest
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
            'code' => 'required|max:2',
            'name' => 'required',
            'full_name' => 'required',
            'iso-3' => 'required|max:3',
            'number' => 'required|max:3|numeric',
            'continent_code' => 'required',
        ];
    }
}
