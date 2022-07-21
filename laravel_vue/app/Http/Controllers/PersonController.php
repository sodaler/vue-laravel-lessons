<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
   public function __invoke()
   {
       $persons = [
           [
               'id' => 1,
               'name' => 'Ivane',
               'age' => 20,
               'job' => 'developer'
           ],
           [
               'id' => 2,
               'name' => 'Victor',
               'age' => 25,
               'job' => 'seller'
           ],
           [
               'id' => 3,
               'name' => 'Julia',
               'age' => 30,
               'job' => 'founder'
           ],
       ];
       return $persons;
   }
}
