<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSomeFieldToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('postcode')->after('id')->nullable();
            $table->string('city')->after('postcode')->nullable();
            $table->string('street')->after('city')->nullable();
            $table->string('house')->after('street')->nullable();
            $table->string('lastname',100)->after('house')->nullable();
            $table->string('company',100)->after('lastname')->nullable();
            $table->string('avatar',255)->after('company')->nullable();
            $table->string('phone',16)->after('avatar')->nullable();
            $table->integer('role_id')->after('phone')->default(0);
            $table->string('availability',50)->after('role_id')->nullable();
            $table->string('gender',50)->after('availability')->nullable();
            $table->integer('coins')->after('gender')->default(0);
            $table->integer('status')->after('coins')->default(0);
            $table->integer('status_pay')->after('status')->default(0);
            $table->integer('active')->after('status_pay')->default(0);
            $table->string('profile_slug',100)->after('active')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('postcode');
            $table->dropColumn('city');
            $table->dropColumn('street');
            $table->dropColumn('house');
            $table->dropColumn('lastname');
            $table->dropColumn('company');
            $table->dropColumn('avatar');
            $table->dropColumn('phone');
            $table->dropColumn('role_id');
            $table->dropColumn('availability');
            $table->dropColumn('gender');
            $table->dropColumn('coins');
            $table->dropColumn('status');
            $table->dropColumn('status_pay');
            $table->dropColumn('active');
            $table->dropColumn('profile_slug');
        });
    }
}
