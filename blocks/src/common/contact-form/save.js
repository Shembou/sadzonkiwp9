import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();
    const { children, ...innerBlockProps } = useInnerBlocksProps.save(blockProps)

    return (
        <form {...innerBlockProps}>
            <label for="name">Imię i nazwisko / nazwa firmy</label>
            <input
                type="text"
                required
                name="name"
                id="name"
                title="Proszę podać imię i nazwisko lub nazwę firmy"
            />
            <label for="mail">Adres e-mail</label>
            <input
                type="email"
                required
                name="mail"
                id="mail"
                title="Proszę podać poprawny adres email"
            />
            <label for="mail">Numer telefonu</label>
            <input
                type="tel"
                required
                name="tel"
                id="tel"
                title="Proszę podać poprawny numer telefonu"
                pattern="^\+?[0-9\s\-]{7,15}$"
            />
            <label for="text" id="input-label">Sam zadaj nam pytanie</label>
            <textarea
                required
                minlength="4"
                id="text"
                name="text"
                rows="5"
                title="Proszę wpisać conajmniej 4 litery"
            ></textarea>
            <div class="checkbox-wrapper">
                <input
                    type="checkbox"
                    id="privacy-policy"
                    name="privacy-policy"
                    required
                    title='Proszę zaakceptować politykę prywatności'
                />
                <label for="privacy-policy">
                    Akceptuję <a href="/polityka-prywatności" target="_blank">Politykę prywatnści</a>
                </label>
            </div>
            <button type="submit">Wyślij</button>
        </form >
    );
}