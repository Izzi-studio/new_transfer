<?php

namespace App\Http\Controllers\ApiFront;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Str;
use Intervention\Image\ImageManagerStatic as Image;
use Hash;

class ApiUserController extends Controller
{

    /**
     * Show user data.
     *
     */
    public function index()
    {
        return new UserResource(User::find(auth()->user()->id));
    }

    /**
     * Update my info.
     * @param  Request $request
     * @return Illuminate\Http\RedirectRespons
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'name' => ['required'],
            'lastname' => ['required'],
            'availability' => ['required'],
            'phone' => ['required'],
        ]);

        auth()->user()->update($request->only('name','lastname','availability','phone'));

        if ($request->hasFile('avatar')) {
            $name_file = Str::random(15).'.jpg';
            $image = $request->file('avatar');
            $image_save = Image::make($image->getRealPath());
            $image_save->resize(128, 128);
            $image_save->save(storage_path(env('LOCAL_PATH_AVATAR') . $name_file));
            auth()->user()->avatar = $name_file;
            auth()->user()->save();
        }


        return new UserResource(User::find(auth()->user()->id));
    }

    /**
     * Update password
     * @param  Request $request
     * @return Illuminate\Http\Response
     */
    public function updatePassword(Request $request)
    {
        $this->validate($request, [
            'old_password' => ['required'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if (Hash::check($request->old_password , auth()->user()->password )) {

            auth()->user()->password = bcrypt($request->password);
            auth()->user()->save();

            return response()->json(['success'=>true], 200);
        }
        return response()->json(['success'=>false, 'old_password_err'=>__('front.old_password_err')], 401);
    }

}
