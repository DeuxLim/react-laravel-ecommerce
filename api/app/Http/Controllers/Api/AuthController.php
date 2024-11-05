<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Validate inputs
        $data = $request->validated();

        // Create user
        $user = User::create(array_merge( $data, [ 'password' => Hash::make($data['password']) ] ));

        // Generate token
        try{
            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e){
            return response()->json( ['errors' => ["Could not create token"]], 500 );
        }

        // Return response
        return response()->json( compact('user', 'token'), 201 );
    }

    public function login(LoginRequest $request){
        $credentials = $request->validated();

        try{
            if(! $token = JWTAuth::attempt($credentials) ){
                return response()->json( ["errors" => [ "Invalid email or password." ]], 401 );
            }
        } catch (JWTException $e){
            return response()->json( ["errors" => [ "Could not create token." ]], 500 );
        }
        $user = JWTAuth::user();

        return response()->json( compact('user', 'token'), 200 );
    }

    public function authenticate(Request $request){
        return response()->json(auth()->user());
    }
}
