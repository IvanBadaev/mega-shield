<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class FooterSetting extends Settings
{
    public ?string $region = '';
    public ?string $street = '';
    public ?string $receptionBureauPhone = '';
    public ?string $receptionBureauEmail = '';
    public ?string $staffBureauPhone = '';
    public ?string $staffBureauEmail = '';
    public ?string $schedule = '';
    public ?string $scheduleBreak = '';
    public ?string $viber = '';
    public ?string $whatsapp = '';
    public ?string $vk = '';

    public static function group(): string
    {
        return 'footer';
    }
}