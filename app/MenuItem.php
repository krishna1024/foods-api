<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    public function choice(){
        return $this->belongsToMany('App\Food','menu_items_map','menu_items_id','foods_id');
    }
}