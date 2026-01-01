import React, { createContext, useContext, useState, useEffect } from 'react';

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

const MOCK_PENDING: User[] = [
    {
        id: '2',
        name: 'Alice Chen',
        email: 'alice@example.com',
        role: 'user',
        status: 'pending',
        tagline: 'Full Stack Developer',
        bio: 'Passionate about building scalable web applications. Expert in React and Node.js.',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        profileImage: '',
        availability: 'Available',
        rate: '$45/hr',
        experience: '3 Years',
        projects: [
            { title: 'E-Commerce Platform', link: '#', description: 'A full-featured shopping platform with Stripe integration.' }
        ]
    },
    {
        id: '3',
        name: 'Marcus Johnson',
        email: 'marcus@example.com',
        role: 'user',
        status: 'pending',
        tagline: 'UI/UX Designer',
        bio: 'Creating beautiful and intuitive user interfaces. Minimalist design philosophy.',
        techStack: ['Figma', 'Tailwind CSS', 'Framer Motion'],
        profileImage: '',
        availability: 'Open',
        rate: '$55/hr',
        experience: '4 Years',
        projects: [
            { title: 'Finance Dashboard', link: '#', description: 'A clean dashboard for personal finance tracking.' }
        ]
    },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Load from local storage or use defaults
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('currentUser_v1');
        return stored ? JSON.parse(stored) : null;
    });

    const [pendingUsers, setPendingUsers] = useState<User[]>(() => {
        const stored = localStorage.getItem('pendingUsers_v1');
        return stored ? JSON.parse(stored) : MOCK_PENDING;
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
                status: 'approved' // Auto approve for simple login demo unless specific flow
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
