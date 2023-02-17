<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries_continents', function (Blueprint $table) {
            DB::unprepared( file_get_contents( "https://gist.githubusercontent.com/kamermans/1441495/raw/a3364fd2469f1ae1bd5d475428d6c0b6853f7cb7/mysql_countries.sql" ) );
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries_continents');
    }
};
