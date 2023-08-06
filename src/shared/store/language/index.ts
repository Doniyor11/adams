import create, {GetState, SetState} from 'zustand';
import {persist} from 'zustand/middleware';


interface ILanguage {
    lang: any;
    setLang: (payload: any) => void;
}

export const useLanguageStore = create(
    persist(
        (set: SetState<ILanguage>, get: GetState<ILanguage>) => ({
            lang: {
                label: 'Русский',
                value: 'ru',
            },
            setLang: (payload: any) =>
                set((state) => ({...state, lang: payload})),
        }),
        {
            name: 'language',
            version: 1,
        },
    ),
);