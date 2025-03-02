<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class VacancySetting extends Settings
{
    public ?string $name = '';
    public ?string $salary = '';
    public ?string $requirements = '';
    public ?string $responsibilities = '';
    public ?string $conditions = '';
    public ?string $imgUrl = '';

    public static function group(): string
    {
        return 'vacancy';
    }
}