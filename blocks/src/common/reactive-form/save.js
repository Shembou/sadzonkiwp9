import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();
    const { children, ...innerBlockProps } = useInnerBlocksProps.save(blockProps)
    return (
        <form {...innerBlockProps}>
            <div className='first-step'>
                <label for="text" id="input-label">Sam zadaj nam pytanie</label>
                <textarea required minLength={2} id="text" name='text' rows={5} />
                <button id="next-step">Przejdź dalej</button >
            </div>
            <div className='second-step'>
                <label for="name">Imię i nazwisko / nazwa firmy</label>
                <input type="text" required name="name" id="name" />
                <label for="mail">Adres e-mail</label>
                <input type="mail" required name="mail" id="mail" />
                <div className='checkbox-wrapper'>
                    <input type="checkbox" id="privacy-policy" name="privacy-policy" />
                    <label for="privacy-policy">Akceptuję <a href="/polityka-prywatności" target='_blank'>Politykę prywatnści</a></label>
                </div>
                <button type="submit">Wyślij</button>
            </div>
        </form>
    );
}
