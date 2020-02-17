<?php

namespace App\Http\Controllers;

use App\usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data= array(
            'data'=>usuario::all(),
            'errors'=>''
        );
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules=[
            'nombre' => 'required',
            'apellidoPaterno' => 'required',
            'apellidoMaterno' => 'required',
            'email' => 'required|email|unique:usuarios',
            'contacto' => 'required',
            'dni' => 'required|unique:usuarios,dni'
        ];

        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return \Response::json([
                'data' => null,
                'errors'  => $validator->errors()->all()
            ], 400);
        }
        $response = usuario::create($request->all());
        return \Response::json([
            'data' => $response,
            'errors'  => null
        ], 201);
        // $data= array(
        //     'data'=>usuario::create($request->all()),
        //     'errors'=>''
        // );
        // return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(usuario $usuario)
    {
        $data= array(
            'data'=>usuario::find($usuario->id),
            'errors'=>''
        );
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, usuario $usuario)
    {
        $Usuario = usuario::findOrFail($usuario->id);
        $Usuario -> update($request->all());
        $data= array(
            'data'=>$Usuario,
            'errors'=> ''
        );
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(usuario $usuario)
    {
        $Data = usuario::findOrFail($usuario->id);
        $Data -> delete();
        $data=array(
            'data'=>$Data,
            'errors'=>''
        );
        return response()->json($Data);
    }
}
