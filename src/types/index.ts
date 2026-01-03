import { User, UserCredential } from 'firebase/auth';

export interface IAuthContext {
    user: User | null;
    loading: boolean;
    createUserEP: (email: string, password: string) => Promise<UserCredential>;
    googleLogin: () => Promise<UserCredential>;
    updateUser: (name: string, photo: string) => Promise<void>;
    signout: () => Promise<void>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    forgetPass: (email: string) => Promise<void>;
}

export interface IEvent {
    _id?: string;
    title: string;
    category: string;
    price: number;
    date: string;
    image: string;
    location: string;
    totalSeats: number;
    description: string;
    organizerEmail?: string | null;
    organizerName?: string | null;
    organizerPhoto?: string | null;
    name?: string;
    organizer?: string;
    createdAt?: string;
    [key: string]: any;
}

export interface IBooking {
    _id: string;
    eventName: string;
    eventDate: string;
    location?: string;
    price: number;
    status: string;
    userEmail?: string;
    name?: string;
    createdAt?: string;
    [key: string]: any;
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    photoURL?: string;
    image?: string;
    status?: string;
    [key: string]: any;
}
