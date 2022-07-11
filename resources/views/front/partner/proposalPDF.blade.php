<style>
    * {
        font-family: sans-serif;
    }

    .item-title {
        font-weight: bold;
        text-indent: 5px;
        margin-top: 0;
        padding-top: 0;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .item-title span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #1072D8;
        float: left;
        transform: translateY(6px);
    }

    .item-txt {
        margin-top: 10px;
        padding-top: 0;
    }

    .item {
        margin-top: 15px;
    }

    .pdf-bottom {
        padding: 20px 0;
        width: 100%;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
    }

    .pdf-bottom span {
        color: #1072D8;
    }
</style>

<img src="{{ env('APP_URL') }}/images/logo.webp" width="230px" alt="">
<hr>
@if($proposal->type_job_id == 1)
    @include('front.partner.proposal-parts.transfer', [
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'from'=> __('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
    ])
@endif
@if($proposal->type_job_id == 2)
    @include('front.partner.proposal-parts.cleaning', [
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
    ])
@endif
@if($proposal->type_job_id == 3)
    @include('front.partner.proposal-parts.transfer-cleaning',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'from'=> __('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
    ])
@endif
@if($proposal->type_job_id == 4)
    @include('front.partner.proposal-parts.flexble',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
        'typeJob' => 'Malerarbeiten',
    ])
@endif
@if($proposal->type_job_id == 5)
    @include('front.partner.proposal-parts.flexble',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
        'typeJob' => 'Bodenleger',
    ])
@endif
@if($proposal->type_job_id == 6)
    @include('front.partner.proposal-parts.flexble',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
        'typeJob' => 'Heizungsanbieter',
    ])
@endif
@if($proposal->type_job_id == 7)
    @include('front.partner.proposal-parts.flexble',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
        'typeJob' => 'Elektriker',
    ])
@endif
@if($proposal->type_job_id == 8)
    @include('front.partner.proposal-parts.flexble',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
        'typeJob' => 'Gärtner',
    ])
@endif
@if($proposal->type_job_id == 9)
    @include('front.partner.proposal-parts.flexble',[
        'date_start'=> $proposal->date_start,
        'additional_info'=> $proposal->additional_info,
        'region'=>__('front.'.$proposal->getRegion->name),
        'client'=> $proposal->getUser,
        'typeJob' => 'Schreiner',
    ])
@endif
<p class="pdf-bottom">Kosten: <span>{{$cost}} CHF</span></p>
