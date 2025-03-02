<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class VacancyFormController extends Controller
{
    public function submitForm(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'tel' => 'required|string',
            'mail' => 'required|string|email',
            'resumeLink' => 'required|string|max:255|url',
        ],
        // Custom validation messages
        [
            'firstName.required' => 'Поле "Имя" обязательно для заполнения.',
            'firstName.max' => 'Поле "Имя" не должно содержать более 255 символов.',
            'lastName.required' => 'Поле "Фамилия" обязательно для заполнения.',
            'lastName.max' => 'Поле "Фамилия" не должно содержать более 255 символов.',
            'tel.required' => 'Поле "Телефон" обязательно для заполнения.',
            'mail.required' => 'Поле "Почта" обязательно для заполнения.',
            'mail.email' => 'Поле "Почта" должно содержать корректный адрес электронной почты.',
            'resumeLink.required' => 'Поле "Ссылка на резюме" обязательно для заполнения.',
            'resumeLink.url' => 'Поле "Ссылка на резюме" должно содержать корректную ссылку.',
        ]);

        $data = [
            'firstName' => $validated['firstName'],
            'lastName' => $validated['lastName'],
            'tel' => $validated['tel'],
            'mail' => $validated['mail'],
            'resumeLink' => $validated['resumeLink'],
        ];

        Mail::send('form_vacancy', $data, function ($message) use ($data) {
            $message->to(env('MAIL_USERNAME'))
                ->subject('Поступил новый отклик на вакансию');
        });

        return response()->json(['message' => 'Отклик успешно отправлен!'], 200);
    }
}
