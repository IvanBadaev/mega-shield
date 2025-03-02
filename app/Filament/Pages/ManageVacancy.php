<?php

namespace App\Filament\Pages;

use App\Settings\VacancySetting;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class ManageVacancy extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-phone';

    protected static string $settings = VacancySetting::class;

    protected static ?string $title = 'Раздел "Вакансии"';

    protected static ?int $navigationSort = 3;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Заголовок объявления (если оставить пустым, раздел будет скрыт)')
                    ->nullable()
                    ->dehydrateStateUsing(fn ($state) => $state === '' ? null : $state),
                TextInput::make('salary')
                    ->label('Заработная плата')
                    ->required(),
                RichEditor::make('requirements')
                    ->label('Требования')
                    ->required()
                    ->toolbarButtons([
                        'bulletList',
                        'orderedList',
                        'bold',
                        'italic',
                        'underline',
                        'undo',
                        'redo',
                    ]),
                RichEditor::make('responsibilities')
                    ->label('Обязанности')
                    ->required()
                    ->toolbarButtons([
                        'bulletList',
                        'orderedList',
                        'bold',
                        'italic',
                        'underline',
                        'undo',
                        'redo',
                    ]),
                RichEditor::make('conditions')
                    ->label('условия')
                    ->required()
                    ->toolbarButtons([
                        'bulletList',
                        'orderedList',
                        'bold',
                        'italic',
                        'underline',
                        'undo',
                        'redo',
                    ]),
                FileUpload::make('imgUrl')->label('Фоновое изображение')
                    ->required()
                    ->image()
                    ->imageEditor()
                    ->imageEditorViewportWidth('1600')
                    ->imageEditorViewportHeight('700')
            ])->columns(1);
    }
}
