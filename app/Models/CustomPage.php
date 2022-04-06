<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class CustomPage extends Model
{
    use HasFactory;
	protected $fillable = ['slug','name','type_job_id'];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'custom_pages';

    protected $dates = [
        'created_at'
    ];
	public function getSeoMetaTags(){
        return $this->hasOne('App\Models\SeoMetaTags', 'item_id', 'id')
            ->where('seo_meta_tags.locale',LaravelLocalization::getCurrentLocale())
            ->where('seo_meta_tags.type','custom_page')->withDefault(['*'=>null]);
    }

	public function getCustomPageDescription(){

        return $this->hasOne('App\Models\CustomPageDescription', 'custom_page_id', 'id')
            ->where('custom_pages_description.locale',LaravelLocalization::getCurrentLocale());
    }

	public function getTypeSlug(){
		$types = [
			1=>'umzug',
			2=>'reinigung',
			3=>'umzug-und-reinigung',
			4=>'maler',
			5=>'bodenleger',
			6=>'heizung',
			7=>'elektriker',
			8=>'gartner',
			9=>'schreiner'
		];

        return $types[$this->type_job_id];
    }

	public function getCustomPageDescriptionAll(){
        return $this->hasOne('App\Models\CustomPageDescription', 'custom_page_id', 'id');
    }

	public function getSeoMetaTagsAll(){
        return $this->hasOne('App\Models\SeoMetaTags', 'item_id', 'id')
            ->where('seo_meta_tags.type','custom_page')->withDefault(['*'=>null]);
    }

    // admin

    public function getCustomPageDescriptionByLocale($locale){
        return $this->hasOne('App\Models\CustomPageDescription', 'custom_page_id', 'id')
            ->where('custom_pages_description.locale',$locale)->first();
    }

    public function getSeoMetaTagsByLocale($locale){
        return $this->hasOne('App\Models\SeoMetaTags', 'item_id', 'id')
            ->where('seo_meta_tags.locale',$locale)
            ->where('seo_meta_tags.type','custom_page')->first();
    }

    public function customPageDescriptionDestroy(){
        return $this->hasMany('App\Models\CustomPageDescription', 'custom_page_id', 'id');
    }

    public function typeJob(){
        return $this->hasOne('App\Models\TypesOfJobs', 'id', 'type_job_id');
    }

    public function seoMetaTagsDestroy(){
        return $this->hasOne('App\Models\SeoMetaTags', 'item_id', 'id')
            ->where('seo_meta_tags.type','custom_page');
    }
}
