<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    protected $fillable = [
        'nombre', 'apellidoPaterno', 'apellidoMaterno', 'email', 'contacto', 'dni'
    ];
}
