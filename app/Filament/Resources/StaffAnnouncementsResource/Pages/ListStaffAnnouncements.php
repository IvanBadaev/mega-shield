<?php

namespace App\Filament\Resources\StaffAnnouncementsResource\Pages;

use App\Filament\Resources\StaffAnnouncementsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListStaffAnnouncements extends ListRecords
{
    protected static string $resource = StaffAnnouncementsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
