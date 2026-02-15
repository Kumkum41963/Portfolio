import React from 'react'
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import {SocialLink} from "..";

function SocialLinksBar() {
    return (
        <div className="flex items-center gap-3" data-testid="footer-social">
            <SocialLink
                href="https://github.com/"
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
                testId="footer-github"
            />
            <SocialLink
                href="https://twitter.com/"
                icon={<Twitter className="h-5 w-5" />}
                label="Twitter"
                testId="footer-twitter"
            />
            <SocialLink
                href="https://linkedin.com/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
                testId="footer-linkedin"
            />
            <SocialLink
                href="mailto:hello@example.com"
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                testId="footer-email"
                isMail
            />
        </div>
    )
}

export default SocialLinksBar