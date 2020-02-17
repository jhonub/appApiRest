<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDniUsuarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios', function(Blueprint $table){
            $table -> string('apellidoPaterno')->nullable()->after('nombre');
            $table -> string('apellidoMaterno')->nullable()->after('apellidoPaterno');
            $table -> string('dni')->nullable()->after('contacto');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuarios', function(Blueprint $table){
            $table -> dropColumn('dni');
        });
    }
}
