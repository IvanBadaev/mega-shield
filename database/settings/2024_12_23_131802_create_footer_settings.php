<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('footer.region', '');
        $this->migrator->add('footer.street', '');
        $this->migrator->add('footer.receptionBureauPhone', '');
        $this->migrator->add('footer.receptionBureauEmail', '');
        $this->migrator->add('footer.staffBureauPhone', '');
        $this->migrator->add('footer.staffBureauEmail', '');
        $this->migrator->add('footer.schedule', '');
        $this->migrator->add('footer.scheduleBreak', '');
        $this->migrator->add('footer.viber', '');
        $this->migrator->add('footer.whatsapp', '');
        $this->migrator->add('footer.vk', '');
    }
};
