<?php

namespace App\Filament\Pages;

use App\Settings\AboutSetting;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class ManageAbout extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-trophy';

    protected static string $settings = AboutSetting::class;

    protected static ?int $navigationSort = 2;

    public static ?string $title = 'раздел "О компании"';

    public function form(Form $form): Form

    {
        return $form
            ->schema([
                TextInput::make('staff')
                    ->label('Численность персонала')
                    ->required(),
                TextInput::make('years')
                    ->label('Лет обслуживания компаний')
                    ->required(),
                TextInput::make('jobs')
                    ->label('Кол-во Проведенных работ')
                    ->required(),
            ])->columns(1);
    }
}
