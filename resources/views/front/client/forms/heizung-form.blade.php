@extends('layouts.app')
@section('content')
<section class="banner headerHeightMarginTop">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <h1 class="banner__title">Umziehen war noch nie so einfach – dank Offerten <strong>Offerten Hummer</strong>
                    haben Sie Ihren Umzug im Handumdrehen&nbsp;erledigt!</h1>
                <p class="banner__txt">Vergleichen Sie innerhalb kürzester Zeit bis zu 6 Angebote von erfahrenen
                    Umzugsunternehmen. </p>
                <img class="banner__mobile-img" src="/images/offerten-hummer-heizung.webp" alt="">
                <div class="d-flex mt-3">
                    <a class="btn" href="#section-steps">ANFRAGE STARTEN</a>
                </div>
            </div>
            <div class="col-lg-5">
                <img class="banner__desktop-img" src="/images/offerten-hummer-heizung.webp" alt="">
            </div>
        </div>
    </div>
</section>
<section class="steps">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">Wie es funktioniert</h2>
                <p class="steps__subtitle">Nehmen Sie Kontakt zu Umzugsunternehmen auf, die Ihren Anforderungen
                    entsprechen</p>
                <p class="steps__txt">Freuen Sie sich auf Ihr neues Zuhause und lassen Sie uns die schwere Arbeit
                    übernehmen. Umzug-365 hilft Ihnen beim problemlosen Umzug.</p>
            </div>
        </div>
        <div class="row steps__wrap">
            <div class="col-lg-4 px-lg-4 steps__wrap-block">
                <div class="steps__block">
                    <div class="steps__block-icon"><img src="/images/steps-icon_1.svg" alt=""></div>
                    <h3 class="steps__block-title">Beschreiben Sie Ihren Umzug</h3>
                    <p class="steps__block-txt">Nur wenige Angaben genügen Offerte Hummer für die Vermittlung eines
                        passenden Umzugsunternehmens. Alle wichtigen Punkte werden berücksichtigt.</p>
                </div>
            </div>
            <div class="col-lg-4 px-lg-4 steps__wrap-block">
                <div class="steps__block">
                    <div class="steps__block-icon"><img src="/images/steps-icon_2.svg" alt=""></div>
                    <h3 class="steps__block-title">Vergleichen Sie<br>Angebote</h3>
                    <p class="steps__block-txt">Auf der Basis Ihrer Angaben ermittelt Offerte Hummer kompetente
                        Umzugsfirmen, die Ihnen zügig aushelfen.</p>
                </div>
            </div>
            <div class="col-lg-4 px-lg-4 steps__wrap-block">
                <div class="steps__block">
                    <div class="steps__block-icon"><img src="/images/steps-icon_3.svg" alt=""></div>
                    <h3 class="steps__block-title">Wählen Sie Ihr bevorzugtes Umzugsunternehmen</h3>
                    <p class="steps__block-txt">Sie haben Ihr persönliches Umzugsunternehmen gefunden? Bestens! Angebot
                        akzeptieren und auf geht’s ins neue Eigenheim.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="banner-txt marginTop100">
    <div class="container banner-txt__container" style="background-image: url(/images/offerten-hummer-heizung-banner1.webp)">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">Jetzt bis zu 6 Umzugsofferten einholen</h2>
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <div class="d-flex justify-content-center banner-txt__wrap-btn">
                        <a class="btn" href="#section-steps">Gratis Offerte einholen</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
<section class="reviews section_bg_blue section_padding_blue">
    <div class="container">
        <h2 class="section-title">Was unsere Kunden sagen</h2>
        <div class="swiper reviews__slider">
            <div class="swiper-wrapper">
                @foreach($reviews as $review)
                <div class="swiper-slide reviews__slide">
                    <p class="reviews__slide-date">{{$review->date}}</p>
                    <p class="reviews__slide-company">{{$review->company}}</p>
                    <p class="reviews__slide-txt">{{$review->getReviewDescription->message}}</p>
                    <div class="reviews__slide-wrap">
                        <div class="reviews__slide-author">{{$review->getReviewDescription->name}}</div>
                        <div class="rating rating_fullness_{{$review->rating}} reviews__slide-rating"></div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="swiper-buttons-wrapper">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</section>
<section class="advantages">
    <div class="container">
        <h2 class="section-title">Ihre Vorteile mit Offerte Hummer</h2>
        <div class="row advantages__wrap">
            <div class="col-lg-6 d-none d-lg-block">
                <div class="advantages__block">
                    <h3 class="advantages__block-title">Wir nehmen Ihnen jede Arbeit ab</h3>
                    <p class="advantages__block-txt">Nur wenige Angaben von Ihnen genügen, und wir haben Ihre
                        Bedürfnisse ausgemacht. Nach wenigen Sekunden sucht der Vergleichsrechner bis zu 6 Umzugsfirmen
                        für Sie heraus. Die Kontaktaufnahme ist kostenlos; die Beratung individuell.</p>
                </div>
                <div class="advantages__block">
                    <h3 class="advantages__block-title">Einzigartiges Preis-Leistungs-Verhältnis</h3>
                    <p class="advantages__block-txt">Ziel unserer Plattform ist es, den Wettbewerb in der Umzugsbranche
                        zu fördern. Die bisherigen Ergebnisse sind eindeutig: Registrierte Kunden sparen durch die
                        Vergleiche bis zu 40 % an Kosten! Transparenz macht’s möglich.</p>
                </div>
                <div class="advantages__block">
                    <h3 class="advantages__block-title">Geprüfte Anbieter, hohe Qualität</h3>
                    <p class="advantages__block-txt">Offerte Hummer versucht, möglichst viele Anbieter zu vereinen und
                        somit den Wettbewerb zu steigern. Dennoch achten wir neben der Quantität auch auf die Qualität
                        und überprüfen die Anbieter. So gelingt Ihr Umzug günstig und problemlos zugleich.</p>
                </div>
                <div class="advantages__block">
                    <h3 class="advantages__block-title">Umzugsfirmen prüfen und bewerten</h3>
                    <p class="advantages__block-txt">Nachdem sich ein Anbieter auf Ihre Offerte gemeldet hat, steht
                        Ihnen dessen Profil zur Verfügung. Erfahren Sie, wie andere Kunden die Umzugsfirma bewerten und
                        vergeben Sie nach der Auftragsüberstellung eine eigene Bewertung.</p>
                </div>
            </div>
            <div class="col-12 d-lg-none">
                <div class="swiper advantages__slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide advantages__block">
                            <h3 class="advantages__block-title">Wir nehmen Ihnen jede Arbeit ab</h3>
                            <p class="advantages__block-txt">Nur wenige Angaben von Ihnen genügen, und wir haben Ihre
                                Bedürfnisse ausgemacht. Nach wenigen Sekunden sucht der Vergleichsrechner bis zu 6
                                Umzugsfirmen für Sie heraus. Die Kontaktaufnahme ist kostenlos; die Beratung
                                individuell.</p>
                        </div>
                        <div class="swiper-slide advantages__block">
                            <h3 class="advantages__block-title">Einzigartiges Preis-Leistungs-Verhältnis</h3>
                            <p class="advantages__block-txt">Ziel unserer Plattform ist es, den Wettbewerb in der
                                Umzugsbranche zu fördern. Die bisherigen Ergebnisse sind eindeutig: Registrierte Kunden
                                sparen durch die Vergleiche bis zu 40 % an Kosten! Transparenz macht’s möglich.</p>
                        </div>
                        <div class="swiper-slide advantages__block">
                            <h3 class="advantages__block-title">Geprüfte Anbieter, hohe Qualität</h3>
                            <p class="advantages__block-txt">Offerte Hummer versucht, möglichst viele Anbieter zu
                                vereinen und somit den Wettbewerb zu steigern. Dennoch achten wir neben der Quantität
                                auch auf die Qualität und überprüfen die Anbieter. So gelingt Ihr Umzug günstig und
                                problemlos zugleich.</p>
                        </div>
                        <div class="swiper-slide advantages__block">
                            <h3 class="advantages__block-title">Umzugsfirmen prüfen und bewerten</h3>
                            <p class="advantages__block-txt">Nachdem sich ein Anbieter auf Ihre Offerte gemeldet hat,
                                steht Ihnen dessen Profil zur Verfügung. Erfahren Sie, wie andere Kunden die Umzugsfirma
                                bewerten und vergeben Sie nach der Auftragsüberstellung eine eigene Bewertung.</p>
                        </div>
                    </div>
                    <div class="swiper-buttons-wrapper">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6"><img class="advantages__img" src="/images/offerten-hummer-vorteile.webp" alt=""></div>
        </div>
    </div>
</section>
<section class="banner-txt marginTop100">
    <div class="container banner-txt__container" style="background-image: url(/images/offerten-hummer-heizung-banner2.webp)">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">Jetzt professionelle Umzugshelfer aus Aargau finden</h2>
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <div class="d-flex justify-content-center banner-txt__wrap-btn">
                        <a class="btn" href="#section-steps">Gratis Offerte einholen</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
<section class="advantages2 section_bg_blue section_padding_blue marginTop100">
    <div class="container">
        <h2 class="section-title">Vorteile einer Zusammenarbeit mit uns</h2>
        <div class="advantages2__wrap">
            <div class="advantages2__block">
                <div class="advantages2__block-icon"><img src="/images/advantages2-icon_1.svg" alt=""></div>
                <h3 class="advantages2__block-title">Umzugsfirma finden – so geht das!</h3>
                <button class="advantages2__block-btn"></button>
                <p class="advantages2__block-txt">Für einen Umzug gibt es Dutzende Gründe. Aber egal, ob Sie aus
                    persönlichen oder beruflichen Gründen umziehen möchten: OffertenHammer hilft Ihnen ohne Wenn und Aber,
                    Ihre Koffer beziehungsweise Umzugskartons zu packen. Insbesondere für Selbstständige und
                    Alleinlebende gelingt der Adressenwechsel mit einer Umzugsfirma am einfachsten. Wir vermitteln
                    zwischen Hunderten erfahrenen Anbietern und interessierten Kunden, die sowohl Unterstützung suchen
                    als auch sparen möchten. Vor allem aber sollte die Qualität stimmen. Wir kümmern uns darum, dass
                    alle Anbieter seriös und gewissenhaft arbeiten, sodass Sie mit ruhigem Gewissen Ihren Umzug planen
                    können.</p>
            </div>
            <div class="advantages2__block">
                <div class="advantages2__block-icon"><img src="/images/advantages2-icon_2.svg" alt=""></div>
                <h3 class="advantages2__block-title">Regionalität zahlt sich aus: Umzugsfirma in Umgebung wählen</h3>
                <button class="advantages2__block-btn"></button>
                <p class="advantages2__block-txt">Durch die Nutzung unserer Anfragenformulare werden Ihnen bis zu 6
                    Umzugsfirmen vorgeschlagen. Im Handumdrehen können Sie die Leistung und Preis vergleichen. Zudem
                    erhalten Sie einen Einblick in die Bewertungs-Historie des Unternehmens. Vor allem aber kümmert sich
                    OffertenHammer darum, dass Ihnen lokale Anbieter vorgestellt werden. So umgehen sie zum Beispiel teure
                    Anfahrtsgebühren und haben die Möglichkeit, auch persönlich, etwa im Büro des Anbieters, Fragen zu
                    stellen. Überdies gelingt so ein Besichtigungstermin wesentlich einfacher, sodass die Planung
                    detaillierter abläuft.</p>
            </div>
            <div class="advantages2__block">
                <div class="advantages2__block-icon"><img src="/images/advantages2-icon_3.svg" alt=""></div>
                <h3 class="advantages2__block-title">Die Mischung macht’s: Preis und Qualität stimmen überein</h3>
                <button class="advantages2__block-btn"></button>
                <p class="advantages2__block-txt">Auch in der Umzugsbranche gilt der Grundsatz, dass der Preis und die
                    Qualität einer Dienstleistung oftmals diametral gegenüberstehen. Wer also einen billigen Umzug
                    sucht, nimmt nicht selten Einbussen bei der Qualität in Kauf. Wer jedoch Qualität schätzt, muss
                    vermeintlich tiefer in die Tasche greifen. Dieser Gedanke ist jedoch überholt! Für jeden Umzug gibt
                    es das richtige Unternehmen, das sowohl zuverlässig als auch günstig arbeitet. OffertenHammer
                    vermittelt kompetente Umzugsfirmen und ermöglicht einen einfachen Preisvergleich!</p>
            </div>
            <div class="advantages2__block">
                <div class="advantages2__block-icon"><img src="/images/advantages2-icon_4.svg" alt=""></div>
                <h3 class="advantages2__block-title">Ihre Meinung zählt: Anbieter bewerten und Kunden helfen</h3>
                <button class="advantages2__block-btn"></button>
                <p class="advantages2__block-txt">Wie kann man zwischen einem „guten“ Umzugsunternehmen und einem
                    weniger „guten“ Umzugsunternehmen unterscheiden? OffertenHammer macht Ihnen diese Aufgabe einfach:
                    Anhand Tausender Kundenmeinungen, die in den letzten Jahren gesammelt wurden, ist es auf einen Blick
                    möglich, den Service eines Anbieters zu beurteilen. Kam der Anbieter rechtzeitig an und wurden die
                    Möbel gut behandelt? Sobald Sie die Bewertungen öffnen, erfahren Sie zu diesen und vielen weiteren
                    Punkten mehr. Selbstverständlich dürfen Sie auch eine eigene Bewertung hinterlassen und damit
                    anderen Kunden helfen.</p>
            </div>
        </div>
    </div>
</section>
<section class="banner-txt marginTop100">
    <div class="container banner-txt__container" style="background-image: url(/images/offerten-hummer-heizung-banner3.webp)">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">Sind Sie bereit, mit Umzugsunternehmen in Aargau in Kontakt zu treten?</h2>
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <div class="d-flex justify-content-center banner-txt__wrap-btn">
                        <a class="btn" href="#section-steps">Umzugsofferten einholen</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
@if(count($faqs))
<section class="faq section_bg_blue section_padding_blue marginTop100">
    <div class="container">
        <h2 class="section-title">FAQ </h2>
        <div>
            @foreach($faqs as $faq)
                <div class="faq-block mt-4">
                    <div class="faq-block__visible">
                        <h3 class="faq-block__title">{{$faq->getFaqDescription->heading}}</h3>
                        <button 
                            class="faq-block__btn" 
                            data-hide-txt="{{ __('front.fewer') }}" 
                            data-show-txt="{{ __('front.faq-read-more') }}"
                        >
                            {{ __('front.faq-read-more') }}
                        </button>
                    </div>
                    <div class="faq-block__slide">
                        {!! $faq->getFaqDescription->content !!}
                    </div>
                </div>
            @endforeach
        </div>
        <div class="d-flex justify-content-center mt-4">
            <button class="btn faq__btn">{{ __('front.show-all') }}</button>
        </div>
    </div>
</section>
@endif
<section id="section-steps" class="steps-form paddingTop60">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="section-title text-start">Heizungsanbieter kostenlos anfragen</h2>
                <p class="mt-3">Füllen Sie unseren Fragebogen aus und wir vermitteln Ihnen bis zu drei Heizungsanbieter für eine unverbindliche Beratung und Offertstellung</p>
            </div>
        </div>
        <div class="steps-form__inner">
            <div id="app">
                <heating url-handler="{{ $action }}" localize="{{ json_encode(__('front')) }}" />
            </div>
        </div>
    </div>
</section>
@endsection
