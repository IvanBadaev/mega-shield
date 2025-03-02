<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StaffAnnouncementsResource\Pages;
use App\Filament\Resources\StaffAnnouncementsResource\RelationManagers;
use App\Models\StaffAnnouncement;
use App\Models\StaffAnnouncements;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class StaffAnnouncementsResource extends Resource
{
    protected static ?string $model = StaffAnnouncement::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell';

    public static ?string $label = 'Уведомление для сотрудников';
    public static ?string $pluralLabel = 'Уведомления для сотрудников';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Textarea::make('desc')->label('Текст уведомления')
                ->required()
                ->maxLength(2048),
                FileUpload::make('imgUrl')->label('Фоновое изображение')
                ->required()
                ->image()
                ->imageEditor()
                ->imageEditorAspectRatios(['1:1']),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('desc')->searchable()->label('Текст уведомления')->wrap(),
                ImageColumn::make('imgUrl')->label('Фоновое изображение')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStaffAnnouncements::route('/'),
            'create' => Pages\CreateStaffAnnouncements::route('/create'),
            'edit' => Pages\EditStaffAnnouncements::route('/{record}/edit'),
        ];
    }
}
