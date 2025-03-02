<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Filament\Resources\NewsResource\RelationManagers;
use App\Models\News;
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

class NewsResource extends Resource
{
    

    protected static ?string $model = News::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    public static ?string $label = 'Новость';
    public static ?string $pluralLabel  = 'Новости';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Forms\Components\Textarea::make('desc')->label('Текст новости')
            ->maxLength(2048),
            Forms\Components\DatePicker::make('date')->label('Дата публикации')
            ->required(),
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
                TextColumn::make('desc')->searchable()->label('Текст новости')->wrap(),
                TextColumn::make('date')->searchable()->label('Дата публикации'),
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
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
