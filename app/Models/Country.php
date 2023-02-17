<?php

namespace App\Models;

use App\Models\Continent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Country extends Model
{
    use HasFactory;

    protected $primaryKey = 'country_id';

    protected $fillable = ['name', 'full_name', 'iso3', 'number', 'continent_code', 'display_order'];

    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }
}
