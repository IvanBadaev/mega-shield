<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    public function submitForm(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'tel' => 'required|string',
            'comment' => 'required|string',
        ],
        [
            'name.required' => 'Поле "Имя" обязательно для заполнения.',
            'name.max' => 'Поле "Имя" не должно содержать более 255 символов.',
            'tel.required' => 'Поле "Телефон" обязательно для заполнения.',
            'comment.required' => 'Поле "Комментарий" обязательно для заполнения.',
        ]);

        $data = [
            'name' => $validated['name'],
            'tel' => $validated['tel'],
            'comment' => $validated['comment'],
        ];

        Mail::send('form_contact', $data, function ($message) use ($data) {
            $message->to(env('MAIL_USERNAME'))
                ->subject('Поступила новая заявка на звонок');
        });

        return response()->json(['message' => 'Заявка успешно отправлена!'], 200);
    }
}
