<?php

namespace App\Http\Controllers;

use App\Models\Koordenada;
use Illuminate\Http\Request;

class KoordenadaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Koordenada::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $koord = new Koordenada;
        $koord->izena = $request->izena;
        $koord->save();
        return $koord;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Koordenada  $koord
     * @return \Illuminate\Http\Response
     */
    public function show(Koordenada $koord)
    {
        return $koord;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Koordenada  $jokua
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Koordenada $koord)
    {
        $koord->izena = $request->izena;
        $koord->save();
        return $koord;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Koordenada  $koord
     * @return \Illuminate\Http\Response
     */
    public function destroy(Koordenada $koord)
    {
        $koord->delete();
        return response()->json(null); 
    }
}
