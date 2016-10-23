<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodsMapTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('foods_map',function(Blueprint $table) {
        $table->increments('id');
        $table->string('food_id');
      });
    }

    /**
     * Reverse the migrations.
     *\
     * @return void
     */
    public function down()
    {
        Schema::drop('foods_map');
    }
}
