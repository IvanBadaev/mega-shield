<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Review;
use App\Models\Service;
use App\Models\StaffAnnouncement;
use App\Settings\AboutSetting;
use App\Settings\FooterSetting;
use App\Settings\PolicySetting;
use App\Settings\VacancySetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {

        $services = Service::all();
        foreach ($services as $service) {
            $service['imgUrl'] = Storage::disk('public')->url($service['imgUrl']);
        }

        $news = News::all();
        foreach ($news as $newsItem) {
            $newsItem['imgUrl'] = Storage::disk('public')->url($newsItem['imgUrl']);
        }

        $reviews = Review::all();
        foreach ($reviews as $review) {
            $review['avatarImgUrl'] = Storage::disk('public')->url($review['avatarImgUrl']);
        }

        $staffAnnouncements = StaffAnnouncement::all();
        foreach ($staffAnnouncements as $announcement) {
            $announcement['imgUrl'] = Storage::disk('public')->url($announcement['imgUrl']);
        }

        $vacancySettings = app(VacancySetting::class);
        $vacancySettings->imgUrl = Storage::disk('public')->url($vacancySettings->imgUrl);
        
        return Inertia::render('Home', [
            'services' => $services,
            'news' => $news,
            'reviews' => $reviews,
            'staffAnnouncements' => $staffAnnouncements,
            'statsSettings' => app(AboutSetting::class),
            'vacancySettings' => app(VacancySetting::class),
            'footerSettings' => app(FooterSetting::class),
        ]);
    }
    public function policy()
    {
        $docUrl = Storage::disk('public')->url(app(PolicySetting::class)->docUrl);
        return Inertia::render('Policy', [
            'docUrl' => $docUrl,
        ]);
    }
}