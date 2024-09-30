<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Log;
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
            return response()->json(['error' => "Could not create token"], 500);
        }

        // Return response
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(LoginRequest $request){
        dd("test");
    }

    public function authenticate(Request $request){
        return response()->json(auth()->user());
    }
}
