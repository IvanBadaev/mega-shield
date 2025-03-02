<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('about.staff', '295+');
        $this->migrator->add('about.years', '21+');
        $this->migrator->add('about.jobs', '500+');
    }
};
