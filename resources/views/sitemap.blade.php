@extends('layouts.app')
@section('content')
<section class="sitemap paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title text-start">Sitemap</h1>
        <div class="mt-4">
            @foreach(array_keys($result) as $item)
                <div class="mt-3">
                    <p class="sitemap__subtitle">{{ $item }}</p>
                    <ul class="ms-3 mt-3">
                        @foreach($result[$item] as $subItem)
                            <li class="mt-2">
                                <a class="sitemap__link" href="{{ $subItem['url'] }}">{{ $subItem['name'] }}</a>
                            </li>
                        @endforeach
                    </ul>    
                </div>   
            @endforeach
        </div>
    </div>
</section>
@stop
