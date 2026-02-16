import { useEffect, useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// We'll keep the logic but reimplement the UI to match the site's theme.
// The Brevo script might try to inject its own styles or manipulate the DOM based on IDs.
// We need to be careful. The previous implementation used the raw HTML from Brevo.
// To "change css only" while effectively "preserving logic", we should keep the form action, ids, and names.
// However, Brevo's script (main.js) relies heavily on specific classes (sib-form, sib-container, etc.) to show/hide messages.
// We will keep the structure but override the styles using Tailwind and !important if necessary, 
// or simply reconstruct the form with the same functional attributes.

const BrevoNewsletter = () => {
    // We can't easily rely on Brevo's script for UI state if we validly want to use our own React/Tailwind components completely,
    // because Brevo's script manipulates the DOM directly.
    // However, the user asked to "change css only without changing logic".
    // This usually means keeping the HTML structure compatible with the script.

    // Strategy:
    // 1. Keep the outer container IDs and classes that the script relies on.
    // 2. Override the styles of those classes to be invisible or reset them.
    // 3. Apply our own Tailwind classes to the elements.

    useEffect(() => {
        // Load Brevo script dynamically
        const script = document.createElement('script');
        script.src = 'https://sibforms.com/forms/end-form/build/main.js';
        script.defer = true;
        document.body.appendChild(script);

        // Initialize Brevo variables
        window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
        window.LOCALE = 'en';
        window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
        window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
        window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
        window.translation = {
            common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected',
                selectedOption: '{quantity} selected',
                selectedOptions: '{quantity} selected',
            }
        };
        window.AUTOHIDE = Boolean(0);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* The main container expected by Brevo */}
            <div id="sib-form-container" className="sib-form-container w-full">

                {/* Error Message */}
                <div
                    id="error-message"
                    className="sib-form-message-panel hidden mb-4 p-3 rounded bg-red-500/10 border border-red-500/50 text-red-500 text-sm text-left"
                >
                    <div className="flex items-center gap-2">
                        <span className="sib-form-message-panel__inner-text">
                            Your subscription could not be saved. Please try again.
                        </span>
                    </div>
                </div>

                {/* Success Message */}
                <div
                    id="success-message"
                    className="sib-form-message-panel hidden mb-4 p-3 rounded bg-green-500/10 border border-green-500/50 text-green-500 text-sm text-left"
                >
                    <div className="flex items-center gap-2">
                        <span className="sib-form-message-panel__inner-text">
                            Your subscription has been successful.
                        </span>
                    </div>
                </div>

                {/* Form Container */}
                <div id="sib-container" className="w-full bg-transparent p-0 !border-0 text-left">
                    <form
                        id="sib-form"
                        method="POST"
                        action="https://e4dcc250.sibforms.com/serve/MUIFAIjKsd963n3akdpffuku6XpgoYowvL-H4QFRHKto_s7aSJG1I5E6bzHkfqQzcRPvUUZe5Td-oEoHssEr2Pa1OXspOuOrptIQps0wbjs52Ehdza6zRXKKH-bi38fRqy-3wtAy-PAG5eNsn0tRjCvJ2-TOxK8r4XuaqzRm7AV37i7uEYIbiMfLD54J4bAACYzUV98OQXRENuzivw=="
                        data-type="subscription"
                        className="w-full"
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <h3 className="font-serif font-bold text-lg text-white mb-2">Stay Updated</h3>
                            <p className="text-white/60 text-sm">
                                Subscribe to our newsletter for exclusive offers and travel inspiration.
                            </p>
                        </div>

                        {/* Input & Button */}
                        <div className="flex gap-2">
                            <div className="form__entry entry_block flex-1 relative">
                                <div className="entry__field">
                                    <Input
                                        className="input bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-gold w-full"
                                        type="text"
                                        id="EMAIL"
                                        name="EMAIL"
                                        autoComplete="off"
                                        placeholder="Your Email"
                                        data-required="true"
                                        required
                                    />
                                </div>
                                <label className="entry__error entry__error--primary text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                                </label>
                            </div>

                            <div className="">
                                <Button
                                    className="sib-form-block__button bg-gold hover:bg-amber-500 text-black shrink-0 w-10 px-0"
                                    form="sib-form"
                                    type="submit"
                                >
                                    {/* We utilize Brevo's loader logic but hide their default SVG if needed, or style it. 
                                         Brevo swaps the SVG display. We can just use our own Icon for default state. */}
                                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon w-4 h-4 text-black hidden" viewBox="0 0 512 512">
                                        {/* Brevo's Loader SVG Path */}
                                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                    </svg>
                                    <Mail className="w-4 h-4 text-black" />
                                </Button>
                            </div>
                        </div>

                        {/* Hidden Inputs */}
                        <input type="text" name="email_address_check" value="" className="input--hidden hidden" />
                        <input type="hidden" name="locale" value="en" />
                    </form>
                </div>
            </div>
            {/* Override Brevo's default styles that might be injected */}
            <style>{`
                .sib-form-message-panel {
                    border-radius: 4px !important;
                    padding: 10px !important;
                }
                #sib-container {
                    border: none !important;
                    padding: 0 !important;
                    background: transparent !important;
                }
                .sib-hide-loader-icon {
                     display: none !important;
                }
                .sib-form-block__button-with-loader.sib-form-block__button-pressed .sib-hide-loader-icon {
                    display: block !important;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default BrevoNewsletter;

// TypeScript declaration for window globals used by Brevo
declare global {
    interface Window {
        REQUIRED_CODE_ERROR_MESSAGE: string;
        LOCALE: string;
        EMAIL_INVALID_MESSAGE: string;
        SMS_INVALID_MESSAGE: string;
        REQUIRED_ERROR_MESSAGE: string;
        GENERIC_INVALID_MESSAGE: string;
        translation: any;
        AUTOHIDE: boolean;
    }
}
