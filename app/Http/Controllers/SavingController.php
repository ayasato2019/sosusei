<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSavingRequest;
use App\Http\Requests\UpdateSavingRequest;
use App\Models\Saving;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SavingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Saving_Goal_Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSavingRequest $request)
    {
        dd($request);
        // ファイルが送信されている場合は、保存処理
        // if ($request->hasFile('goal_images')) {
        //     $path = $request->file('goal_images')->store('public/goal_images');
        // } else {
        //     $path = 'default_image_path'; // デフォルト画像のパスがあれば指定
        // }

        // Saving モデルにデータを保存
        $saving = new Saving();
        $saving->user_id = Auth::id();
        $saving->goal_name = $request->goal_name;
        $saving->goal_amount = $request->goal_amount;
        $saving->goal_date = $request->goal_date;
        $saving->goal_level = $request->goal_level;
        $saving->goal_images = $request->goal_images ?: "https://borderlesss.sakura.ne.jp/ss1/assets/images/photo-noimages.jpg";
        $saving->memo = $request->memo;
        $saving->is_shared = $request->input('is_shared', false); // is_sharedがnullの場合はfalse

        // データベースに保存
        $saving->save();

        return Inertia::render('Saving_List', [
            'saving' => Saving::all(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Saving $saving)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Saving $saving)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSavingRequest $request, Saving $saving)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Saving $saving)
    {
        //
    }
}
