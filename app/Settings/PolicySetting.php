<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class PolicySetting extends Settings
{

    public ?string $docUrl = '';
    
    public static function group(): string
    {
        return 'policy';
    }
}