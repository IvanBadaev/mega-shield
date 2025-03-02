<?php

namespace App\Filament\Pages;

use App\Settings\FooterSetting;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class ManageFooter extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string $settings = FooterSetting::class;

    protected static ?string $title = "Настройка подвала";

    protected static ?int $navigationSort = 4;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('region')
                    ->label('Адрес (регион)')
                    ->required(),
                TextInput::make('street')
                    ->label('Адрес (улица, дом)')
                    ->required(),
                TextInput::make('receptionBureauPhone')
                    ->label('Номер приёмной')
                    ->required(),
                TextInput::make('receptionBureauEmail')
                    ->label('Электронная почта приёмной')
                    ->email()
                    ->required(),
                TextInput::make('staffBureauPhone')
                    ->label('Номер отдела по управлению персоналом')
                    ->required(),
                TextInput::make('staffBureauEmail')
                    ->label('Электронная почта отдела по управлению персоналом')
                    ->email()
                    ->required(),
                TextInput::make('schedule')
                    ->label('График работы')
                    ->required(),
                TextInput::make('scheduleBreak')
                    ->label('Перерыв в расписании')
                    ->required(),
                TextInput::make('viber')
                    ->label('Ссылка на viber')
                    ->required(),
                TextInput::make('whatsapp')
                    ->label('Ссылка на whatsapp')
                    ->required(),
                TextInput::make('vk')
                    ->label('Ссылка на vk')
                    ->required(),
            ])->columns(2);
    }
}
