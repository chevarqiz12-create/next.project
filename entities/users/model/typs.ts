export interface User {
    id: number;
    phone_number: string;
    email: string;
    full_name: string;
    avatar: string | null;
    whatsapp_number: string;
    telegram_number: string | null;
    phone_number_verified: boolean;
    email_confirmed: boolean;
}