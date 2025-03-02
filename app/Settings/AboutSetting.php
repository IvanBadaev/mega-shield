<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class AboutSetting extends Settings
{

    public ?string $staff = '';
    public ?string $years = '';
    public ?string $jobs = '';

    public static function group(): string
    {
        return 'about';
    }
}