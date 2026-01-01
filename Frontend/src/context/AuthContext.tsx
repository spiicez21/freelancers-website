import React, { createContext, useContext, useState, useEffect } from 'react';
import mockProfiles from '../data/mockProfiles.json';

// Types
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
    status: 'approved' | 'pending';
    tagline?: string; // Job Title e.g. "Full Stack Developer"
    bio?: string;
    techStack?: string[];
    profileImage?: string;
    bannerImage?: string;
    availability?: 'Available' | 'Busy' | 'Open';
    rate?: string;
    experience?: string;
    socials?: {
        github?: string;
        linkedin?: string;
        portfolio?: string;
    };
    projects?: {
        title: string;
        link: string;
        description: string;
        image?: string;
    }[];
}

interface AuthContextType {
    currentUser: User | null;
    pendingUsers: User[];
    login: (email: string) => void;
    signup: (name: string, email: string) => void;
    completeOnboarding: (data: Partial<User>) => void;
    approveUser: (id: string) => void;
    rejectUser: (id: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Initial Data
const INITIAL_ADMIN: User = {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'approved',
    tagline: 'System Administrator'
};


const MOCK_PENDING: User[] = mockProfiles as User[];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Load from local storage or use defaults
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('currentUser_v1');
        return stored ? JSON.parse(stored) : null;
    });

    const [pendingUsers, setPendingUsers] = useState<User[]>(() => {
        const stored = localStorage.getItem('pendingUsers_v1');
        const parsed = stored ? JSON.parse(stored) : null;
        // If nothing in storage OR we have cleared everything, re-seed with mock data
        return (parsed && parsed.length > 0) ? parsed : MOCK_PENDING;
    });

    // Persist state
    useEffect(() => {
        if (currentUser) localStorage.setItem('currentUser_v1', JSON.stringify(currentUser));
        else localStorage.removeItem('currentUser_v1');
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem('pendingUsers_v1', JSON.stringify(pendingUsers));
    }, [pendingUsers]);

    const login = (email: string) => {
        if (email.includes('admin')) {
            setCurrentUser(INITIAL_ADMIN);
        } else {
            // Simulate user login - if in pending list, log them in as pending?
            // For now, simple mock: create a dummy user session or find in "db"
            setCurrentUser({
                id: 'user-' + Date.now(),
                name: 'Test User',
                email,
                role: 'user',
                status: 'approved',
                tagline: 'Brand Designer',
                bio: 'Creating impactful visual identities for the next generation of digital products.',
                techStack: ['Figma', 'Illustrator', 'React'],
                availability: 'Available',
                rate: '$40/hr',
                experience: '2+ Years',
                projects: [
                    { title: 'Project 1', link: '#', description: 'Brief showcase project.' }
                ]
            });
        }
    };

    const signup = (name: string, email: string) => {
        const newUser: User = {
            id: 'user-' + Date.now(),
            name,
            email,
            role: 'user',
            status: 'pending' // New signups are pending
        };
        setCurrentUser(newUser); // Log them in immediately to continue onboarding
    };

    const completeOnboarding = (data: Partial<User>) => {
        if (!currentUser) return;
        const updatedUser = { ...currentUser, ...data };
        setCurrentUser(updatedUser);

        // Add to pending list for admin to see
        setPendingUsers(prev => [...prev, updatedUser]);
    };

    const approveUser = (id: string) => {
        setPendingUsers(prev => prev.filter(u => u.id !== id));
        // In a real app, this would verify the user in the "Members" database
        console.log(`Approved user ${id}`);
    };

    const rejectUser = (id: string) => {
        setPendingUsers(prev => prev.filter(u => u.id !== id));
    };

    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{
            currentUser,
            pendingUsers,
            login,
            signup,
            completeOnboarding,
            approveUser,
            rejectUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
