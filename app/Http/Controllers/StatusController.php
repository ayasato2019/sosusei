<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Models\Status;
use App\Models\Saving;
use App\Models\History;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class StatusController extends Controller
{
    /**
     * ユーザー情報をまとめてとる
     */
    public function index()
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id();
        // user_idをキーにした連想配列に変換
        $statuses = Status::where('user_id', $id)->get()->keyBy('user_id');
        // Savingデータ取得
        $savings = Saving::where('user_id', $id)->get()->keyBy('user_id');
        // Historyデータ取得
        $histories = History::where('user_id', $id)->get()->keyBy('user_id');
        // dd($statuses);
        return Inertia::render('Saving_List', compact(
            'statuses',
            'savings',
            'histories',
            'id'
        ));
    }

    /**
     * 見るだけ
     */
    public function create()
    {
        return Inertia::render('Welcome', []);
    }

    /**
     * ステータスの登録　リダイレクト先に注意
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
        $statuses->user_id = Auth::id();
        $statuses->saving = $validated['saving'];
        $statuses->investment = $validated['investment'];
        $statuses->essential = $validated['essential'];
        $statuses->extravagance = $validated['extravagance'];
        $statuses->donation = $validated['donation'];

        // データベースに保存
        $statuses->save();

        // return Inertia::render('Saving_List', [
        //     'statuses' => Status::all(),
        // ]);
        return redirect()->route('Saving_List');
    }

    /**
     * Display the specified resource.
     */
    public function show(Status $status) {}

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
