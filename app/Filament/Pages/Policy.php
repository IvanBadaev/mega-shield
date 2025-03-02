<?php

namespace App\Filament\Pages;

use App\Settings\PolicySetting;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class Policy extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-document';

    protected static string $settings = PolicySetting::class;

    protected static ?string $title = 'Политика конфиденциальности';

    protected static ?int $navigationSort = 5;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('docUrl')->label('Файл с политикой конфиденциальности (pdf).')
                    ->acceptedFileTypes(['application/pdf'])
                    ->required()
            ]);
    }
}
