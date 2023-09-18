import React from "react";


export const Reference = () => {
    return (
        <footer>
            <p className="mb-1 text-muted">Made by Mathew Woo 🤓</p>
            <a
                class="btn text-white btn-floating m-1 rounded-circle"
                style={{ background: "#333333" }}
                href="https://github.com/MatWoov" target="_blank"
                role="button">
                <i class="fab fa-github"></i>
            </a>
            <a
                class="btn text-white m-1 rounded-circle"
                style={{ background: "#0082ca" }}
                href="https://www.linkedin.com/in/mathew-woo-35024a13a/" target="_blank"
                role="button">
                <i class="fab fa-linkedin"></i>
            </a>
            <p className="border-top border-info pt-2 text-center text-muted">4Geeks Academy</p>
        </footer>
    )
}