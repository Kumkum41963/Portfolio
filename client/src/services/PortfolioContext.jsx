import { createContext, useContext, useState } from "react";
import { api } from './api';
import { toast } from "sonner";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const [stats, setStats] = useState({
        views: 0,
        downloads: 0,
        prints: 0,
        inquiries: 0,
        lastResumeUpdate: null
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Refresh Stats
    const refreshStats = async () => {
        setLoading(true);
        try {
            const statData = await api.admin.getAdminStats();
            console.log('statData:', statData)
            setStats(statData);
            setError(null);
        } catch (error) {
            setError("Failed to sync stats");
            console.log('error in refreshStats:', error.message);
        } finally {
            setLoading(false);
        }
    };

    // Upload Resume
    const uploadResume = async (resumeFile) => {
        setLoading(true);
        try {
            console.log('File data initiating')
            const formData = new FormData();
            formData.append('resume', resumeFile);
            console.log("File in FormData:", formData.get('resume'));
            await api.admin.uploadResume(formData);
            await refreshStats(); // Update dashboard counts and timestamp
            setError(null);
            toast.success("Resume uploaded and synced successfully!");
            return true;
        } catch (error) {
            setError("Upload failed");
            toast.error("Failed to upload resume");
            console.log('error in uploadResume:', error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Trigger Resume Action (View/Download/Print)
    const triggerResumeAction = async (actionType) => {
        try {
            const resumeUrl = await api.admin.urlAction(actionType);
            await refreshStats(); // Silent refresh for Admin counts
            setError(null);
            return resumeUrl;
        } catch (error) {
            setError("Action tracking failed");
            console.log('error in triggerAction:', error.message);
        }
    };

    // Submit Contact Form
    const submitInquiry = async (formData) => {
        try {
            console.log('Client sending formData to server')
            console.log('formData:', formData)
            await api.contact.send(formData);
            await refreshStats();
            toast.success("Message sent! I'll get back to you soon.");
            return { success: true };
        } catch (err) {
            toast.error("Message failed to send. Please try again.");
            console.log('Error in contact form:', err.message);
            return { success: false, message: err.message };
        }
    };

    return (
        <PortfolioContext.Provider value={{
            stats,
            loading,
            error,
            refreshStats,
            triggerResumeAction,
            uploadResume,
            submitInquiry
        }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export const usePortfolio = () => useContext(PortfolioContext);