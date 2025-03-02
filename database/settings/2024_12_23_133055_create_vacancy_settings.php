<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('vacancy.name', '');
        $this->migrator->add('vacancy.salary', '');
        $this->migrator->add('vacancy.imgUrl', '');
        $this->migrator->add('vacancy.requirements', '');
        $this->migrator->add('vacancy.responsibilities', '');
        $this->migrator->add('vacancy.conditions', '');
    }
};
