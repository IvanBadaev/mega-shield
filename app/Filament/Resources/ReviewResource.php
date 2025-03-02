<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReviewResource\Pages;
use App\Filament\Resources\ReviewResource\RelationManagers;
use App\Models\Review;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-o-star';

    public static ?string $label = 'Отзыв';
    public static ?string $pluralLabel = 'Отзывы';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Select::make('starsCount')->label('Количество звёзд')
            ->options([
                '0' => '0',
                '1' => '1',
                '2' => '2',
                '3' => '3',
                '4' => '4',
                '5' => '5',
            ])->required(),
            Forms\Components\Textarea::make('reviewText')->label('Текст отзыва')
            ->required()
            ->maxLength(2048),
            Forms\Components\Textarea::make('reviewResponse')->label('Ответ компании')
            ->required()
            ->maxLength(2048),
            FileUpload::make('avatarImgUrl')->label('Изображение профиля автора отзыва')
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
                TextColumn::make('starsCount')->searchable()->label('Количество звёзд')->limit(30),
                TextColumn::make('reviewText')->searchable()->label('Текст отзыва')->wrap(),
                TextColumn::make('reviewResponse')->searchable()->label('Ответ компании')->wrap(),
                ImageColumn::make('avatarImgUrl')->label('Изображение профиля')
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
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReview::route('/create'),
            'edit' => Pages\EditReview::route('/{record}/edit'),
        ];
    }
}
