<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\CategoriaRepository;

class CategoriaController extends Controller
{
    protected $categoria_repository;
    public function __construct(CategoriaRepository $categoria)
    {
        $this->categoria_repository = $categoria;
    }

    public function list()
    {
        return response()->json($this->categoria_repository->list());
    }


    public function create(Request $request)
    {
        $nombre = $request->input('nombre');
        return response()->json($this->categoria_repository->create($nombre));
    }   


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $datos=$request->all();
        $id = $request->input('id');
        $nombre = $request->input('nombre');
        return response()->json($this->categoria_repository->update($id,$nombre));
    }


    public function destroy($id)
    {
        //
    }
}
