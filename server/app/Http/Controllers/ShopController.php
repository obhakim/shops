<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function getShops()
    {
        $shops = Shop::all();
        $response = [
            'shops' => $shops
        ];

        return response()->json($response, 200);

    }
}
