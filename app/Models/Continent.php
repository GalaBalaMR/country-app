<?php

namespace App\Models;

use App\Models\Country;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Continent extends Model
{
    use HasFactory;
    
    // ID is not integer
    public $incrementing = false;

    // Primary key is not 'id' but 'code'
    protected $primaryKey = 'code';


    protected $fillable = ['code', 'name'];

    public function countries()
    {
        return $this->hasMany(Country::class);
    }
}
