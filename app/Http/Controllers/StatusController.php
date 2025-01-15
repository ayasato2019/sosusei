<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Models\Status;
use Inertia\Inertia;


class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statuses = Status::get();
        // dd($statuses);
        return redirect()->route('Saving_List',[
        'statuses' => $statuses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Welcome', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStatusRequest $request)
    {
        $validated = $request->validate([
            'saving' => ['required', 'numeric', 'max:99999999999999999'],
            'investment' => ['required', 'numeric', 'max:99999999999999999'],
            'essential' => ['required', 'numeric', 'max:99999999999999999'],
            'extravagance' => ['required', 'numeric', 'max:99999999999999999'],
            'donation' => ['required', 'numeric', 'max:99999999999999999'],
        ]);

        $statuses = new Status();
        $statuses->saving = $validated['saving'];
        $statuses->investment = $validated['investment'];
        $statuses->essential = $validated['essential'];
        $statuses->extravagance = $validated['extravagance'];
        $statuses->donation = $validated['donation'];

        // データベースに保存
        $statuses->save();

        return Inertia::render('Saving_List', [
            'statuses' => Status::all(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Status $status)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Status $status)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatusRequest $request, Status $status)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Status $status)
    {
        //
    }
}
