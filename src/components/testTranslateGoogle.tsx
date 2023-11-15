import React, {useState} from 'react';
// import translate from 'google-translate-api';

function TranslationComponent() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const translate: any = require('google-translate-api');


    const handleTranslation = async () => {
        try {
            const res = await translate(text, {to: 'en'}); // Замените 'en' на язык, на который хотите перевести
            setTranslatedText(res.text);
        } catch (error) {
            console.error('Translation error:', error);
        }
    };

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleTranslation}>Translate</button>
            <div>
                <p>Translated Text:</p>
                <p>{translatedText}</p>
            </div>
        </div>
    );
}

export default TranslationComponent;
