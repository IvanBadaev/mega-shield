<?php

namespace App\Filament\Resources\StaffAnnouncementsResource\Pages;

use App\Filament\Resources\StaffAnnouncementsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditStaffAnnouncements extends EditRecord
{
    protected static string $resource = StaffAnnouncementsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
