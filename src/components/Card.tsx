interface CardProps {
    darkMode: boolean;
    children: React.ReactNode;
}

export const Card = ({ darkMode, children }: CardProps) => (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-[#1e2939]' : 'bg-white shadow-lg'}`}>
        {children}
    </div>
);