<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSavingRequest;
use App\Http\Requests\UpdateSavingRequest;
use App\Models\Saving;
use App\Models\Status;
use App\Models\History;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SavingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

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
        // dd($request);
        // ファイルが送信されている場合は、保存処理
        // if ($request->hasFile('goal_images')) {
        //     $path = $request->file('goal_images')->store('public/goal_images');
        // } else {
        //     $path = 'default_image_path'; // デフォルト画像のパスがあれば指定
        // }

        // Saving モデルにデータを保存
        $saving = new Saving();
        $saving->user_id = Auth::id();
        $saving->comment_id = $request->comment_id ?? null;
        $saving->goal_name = $request->goal_name;
        // $saving->goal_group_id = $request->goal_group_id;
        $saving->goal_amount = $request->goal_amount;
        $saving->goal_date = $request->goal_date;
        $saving->goal_level = $request->goal_level;
        $saving->goal_images = $request->goal_images ?: "";
        $saving->memo = $request->memo;
        $saving->is_shared = $request->input('is_shared', false); // is_sharedがnullの場合はfalse

        // データベースに保存
        $saving->save();

        return redirect()->route('Saving_List');
    }

    /**
     * Display the specified resource.
     */
    public function show(Saving $id)
    {
        // 現在認証しているユーザーのIDを取得
        $userId = Auth::id();

        // user_idをキーにした連想配列に変換
        $statuses = Status::where('user_id', $userId)->get()->keyBy('user_id');

        // Savingデータ取得
        $savings = $id;

        // $saving = new Saving();;
        // $saving->saving_id = $savings->saving_id;
        // $saving->user_id = $savings->user_id;
        // $saving->comment_id = $savings->comment_id;
        // $saving->goal_group_id = $savings->goal_group_id;
        // $saving->goal_name = $savings->goal_name;
        // $saving->goal_date = $savings->goal_date;
        // $saving->goal_level = $savings->goal_level;
        // $saving->goal_images = $savings->goal_images;
        // $saving->is_shared = $savings->is_shared;
        // $saving->memo = $savings->memo;
        // Historyデータ取得
        $histories = History::where('user_id', $userId)->get()->toArray();
        // dd($savings);
        return Inertia::render('Saving_Id', compact(
            'statuses',
            'savings',
            'histories'
        ));
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
